const path = require("path");
const fs = require("fs");
const dir = path.resolve(__dirname, "dir");
const targetDir = path.resolve(__dirname, "dir", "dist");
const targetMap = {};
function exportFiles(chartNames, chartMaps) {
  fs.readdir(dir, function (err, files) {
    if (err) {
      console.log(err);
    }
    if (Array.isArray(files)) {
      const len = chartNames.length;
      let i = 0;
      for (const file of files) {
        const p = path.resolve(__dirname, "dir", file);
        fs.stat(p, (err, stat) => {
          if (err) {
            console.log(err);
          } else {
            if (stat.isFile() && p.endsWith(".js")) {
              const fileName = file.split(".js")[0];
              const alias = chartMaps.find((cp) => {
                return cp.publishId === fileName;
              });
              const cn = chartNames.find(
                (item) => item.alias === alias.name || item.name === alias.name
              );
              const originChartName = cn.name;
              fs.readFile(p, "utf8", (err, content) => {
                const matchs = content.match(/register\(\"(.+)\",function/);
                if (matchs) {
                  const conchId = matchs[1];
                  const targetPath = path.resolve(targetDir, conchId + ".js");
                  fs.writeFileSync(targetPath, content);
                  targetMap[originChartName] = conchId;
                  i++;
                  if (i === len) {
                    const mapPath = path.resolve(targetDir, "map.js");
                    fs.writeFileSync(mapPath, JSON.stringify(targetMap));
                  }
                }
              });
            }
          }
        });
      }
    }
  });
}

module.exports = {
  exportFiles,
};

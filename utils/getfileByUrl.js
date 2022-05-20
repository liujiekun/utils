var fs = require("fs");
var path = require("path");
var request = require("request");
function getfileByUrl (url, fileName, dir, callback) {
 let stream = fs.createWriteStream(path.join(dir, fileName));
 request(url)
  .pipe(stream)
  .on("close", function (err) {
   if (err) {
    console.log('err', err)
    console.log(`${fileName}下载失败`)
   } else {
    console.log(`${fileName}下载完毕`)
    callback && callback()
   }
  });
}
module.exports = {
 getfileByUrl
}
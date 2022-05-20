const fs = require('fs')
const path = require('path')
const targetDir = path.resolve(__dirname, "svgs")
const distUrl = path.resolve(__dirname, 'dist')

fs.readdir(targetDir, function (err, files) {
  if (err) {
    console.log(err);
  }
  if (Array.isArray(files)) {
    const map = {}
    const zhMap = {}
    let index = 0
    const len = files.length
    for (const file of files) {
      const p = path.resolve(__dirname, "svgs", file);
      console.log(file, index)
      fs.stat(p, (err, stat) => {
        if (err) {
          console.log(err);
        } else {
          if (stat.isFile() && p.endsWith(".svg")) {
            fs.readFile(p, "utf8", (err, content) => {
              if (err) {
                console.log(err)
              }
              console.log('p 读取', p, index)
              const fileName = file.split('.svg')
              const svgInfo = {
                shapeName: `Electronic_${ index }`,
                svgstr: content,
              }
              map[`Electronic_${ index }`] = svgInfo
              zhMap[`Electronic_${ index }`] = fileName[0]
              console.log('index,len-1', index, len - 1)
              if (index === len - 1) {
                console.log('完毕开始写入')
                const mapUrl = path.resolve(distUrl, 'svgconfig.js')
                const zhUrl = path.resolve(distUrl, 'zh.js')
                const mapcontent = `export const electronics = ${ JSON.stringify(map) }`
                fs.writeFileSync(mapUrl, mapcontent)
                fs.writeFileSync(zhUrl, JSON.stringify(zhMap))
                console.log('输出完毕')
              }
              index++
            })
          } else {
            index++
          }
        }
      })
    }
  }
})
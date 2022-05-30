const ratio = 28 / 128
function scaleNum(num) {
  return (num * ratio).toFixed(2)
}
function scaleFn(svgstr) {
  // viewBox
  svgstr = svgstr.replace(/viewBox="(.+?)"/g, function (str, m) {
    return `viewBox="0 0 28 28"`
  })
  // x
  svgstr = svgstr.replace(/\bx="(.+?)"/g, function (str, match) {
    return `x="${scaleNum(+match)}"`
  })
  // y
  svgstr = svgstr.replace(/\by="(.+?)"/g, function (str, match) {
    return `y="${scaleNum(+match)}"`
  })
  svgstr = svgstr.replace(/\btransform="(.+?)"/g, function (str, match) {
    let temp = match
    temp = temp.replace(/translate\((.+?)\)/g, function (s, m) {
      const [x, y] = m.split(' ')
      console.log('x,y', x, y)
      return `translate(${scaleNum(+x)} ${scaleNum(+y)})`
    })
    return `transform="${temp}"`
  })
  // x1
  svgstr = svgstr.replace(/\bx1="(.+?)"/g, function (str, match) {
    return `x1="${scaleNum(+match)}"`
  })
  // x2
  svgstr = svgstr.replace(/\bx2="(.+?)"/g, function (str, match) {
    return `x2="${scaleNum(+match)}"`
  })
  // y1
  svgstr = svgstr.replace(/\by1="(.+?)"/g, function (str, match) {
    return `y1="${scaleNum(+match)}"`
  })
  // y2
  svgstr = svgstr.replace(/\by2="(.+?)"/g, function (str, match) {
    return `y2="${scaleNum(+match)}"`
  })
  // cx
  svgstr = svgstr.replace(/\bcx="(.+?)"/g, function (str, match) {
    return `cx="${scaleNum(+match)}"`
  })
  // cy
  svgstr = svgstr.replace(/\bcy="(.+?)"/g, function (str, match) {
    return `cy="${scaleNum(+match)}"`
  })
  // r
  svgstr = svgstr.replace(/\br="(.+?)"/g, function (str, match) {
    return `r="${scaleNum(+match)}"`
  })
  // rx
  svgstr = svgstr.replace(/\brx="(.+?)"/g, function (str, match) {
    return `rx="${scaleNum(+match)}"`
  })
  // ry
  svgstr = svgstr.replace(/\bry="(.+?)"/g, function (str, match) {
    return `ry="${scaleNum(+match)}"`
  })
  // width
  svgstr = svgstr.replace(/\bwidth="(.+?)"/g, function (str, match) {
    return `width="${scaleNum(+match)}"`
  })
  // height
  svgstr = svgstr.replace(/\bheight="(.+?)"/g, function (str, match) {
    return `height="${scaleNum(+match)}"`
  })
  // d=""
  svgstr = svgstr.replace(/\bd="(.+?)"/g, function (str, match) {
    let matchStr = match
    matchStr = matchStr.replace(/([a-zA-Z])([^a-zA-Z]+)/g, function (s, h, m) {
      if (h === 'a' || h === 'A') {
        const temp = m
        const arr = []
        let i = 0
        let j = 0
        let flag = false
        const len = temp.length
        while (j < len) {
          const char = temp[j]
          if (char === ',') {
            // todo
            const num = temp.substring(i, j)
            arr.push(+num)
            flag = false
            i = j + 1
          } else if (char === '.') {
            if (flag) { //已经有一个.了，截断
              // todo
              const num = temp.substring(i, j)
              arr.push(+num)
              flag = true
              i = j
            } else {
              flag = true
            }
          } else if (char === '-') {
            const num = temp.substring(i, j)
            arr.push(+num)
            flag = false
            i = j
          }
          j++
        }
        // 结束前最后一次push
        const num = temp.substring(i, j)
        arr.push(+num)
        flag = false
        for (let k = 0; k < arr.length; k++) {
          if (k % 7 < 2 || k % 7 > 4) {
            arr[k] = scaleNum(arr[k])
          }
        }
        return `${h}${arr.join(',')}`
      } else {
        let temp = m
        temp = temp.replace(/(\d*\.?\d+)/g, function (s, m) {
          return `${scaleNum(+m)}`
        })
        return `${h}${temp}`
      }

    })
    return `d = "${matchStr}"`
  })
  // points=""
  svgstr = svgstr.replace(/\bpoints="(.+?)"/g, function (str, match) {
    const matchResult = match.replace(/(\d+\.?\d+)/g, function (s, m) {
      return `${scaleNum(+m)}`
    })
    return `points="${matchResult}"`
  })
  return svgstr
}
module.exports = {
  scaleFn
}
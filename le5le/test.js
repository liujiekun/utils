var str = 'a0.36,0.36,0.00,0.00,0.22,0.22,0.10,0.28,0.28,0.00,0.00,0.22,0.080.21,0.34,0.34,0.00,0.00,0.22-0.14,0.29,0.67,0.67,0.00,0.00,0.22-0.390.10'
function mysplit(m) {
  const temp = m
  const arr = []
  let i = 0
  let j = 0
  let flag = false
  let neg = 1
  const len = temp.length
  while (j < len) {
    const char = temp[j]
    if (char === ',') {
      // todo
      const num = temp.substring(i, j)
      arr.push(neg * (+num))
      neg = 1
      i = j + 1
    } else if (char === '.') {
      if (flag) { //已经有一个.了，截断
        // todo
        const num = temp.substring(i, j)
        arr.push(neg * (+num))
        neg = 1
        flag = false
        i = j + 1
      } else {
        flag = true
      }
    } else if (char === '-') {
      neg = -1
    }
    j++
  }
  console.log(arr)
}
mysplit(str)
import go from 'gojs'
export function handlePolyLine(line, collect) {
  const isColorful = Array.isArray(collect)
  const pointsStr = line.getAttribute('points')
  const pointsArr = pointsStr.split(' ')
  const px = pointsArr.shift()
  const py = pointsArr.shift()
  const fig = new go.PathFigure(px, py, false)
  while (pointsArr.length) {
    const px1 = pointsArr.shift()
    const py1 = pointsArr.shift()
    const pathSegment = new go.PathSegment(go.PathSegment.Line, +px1, +py1)
    // if (pointsArr.length === 0) {
    //   pathSegment.close()
    // }
    fig.add(pathSegment)
  }
  if (isColorful) {
    const geo = new go.Geometry()
    geo.add(fig)
    collect.push(go.Geometry.stringify(geo))
  } else {
    collect.add(fig)
  }
}

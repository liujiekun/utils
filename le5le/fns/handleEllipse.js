import go from 'gojs'
export function handleEllipse(path, collect) {
  const isColorful = Array.isArray(collect)
  let cx = path.getAttribute('cx')
  let cy = path.getAttribute('cy')
  let rx = path.getAttribute('rx')
  let ry = path.getAttribute('ry')
  cx = +cx
  cy = +cy
  rx = +rx
  ry = +ry
  const fig = new go.PathFigure(cx + rx, cy, false)
  const pathSegment = new go.PathSegment(
    go.PathSegment.Arc,
    0,
    360,
    cx,
    cy,
    rx,
    ry
  ).close()
  fig.add(pathSegment)
  if (isColorful) {
    const geo = new go.Geometry()
    geo.add(fig)
    collect.push(go.Geometry.stringify(geo))
  } else {
    collect.add(fig)
  }
}

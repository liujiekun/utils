import go from 'gojs'
export function handleCircle(circle, collect) {
  const isColorful = Array.isArray(collect)
  let cx = circle.getAttribute('cx')
  let cy = circle.getAttribute('cy')
  let r = circle.getAttribute('r')
  cx = +cx
  cy = +cy
  r = +r
  const fig = new go.PathFigure(cx + r, cy, false)
  const pathSegment = new go.PathSegment(
    go.PathSegment.Arc,
    0,
    360,
    +cx,
    +cy,
    +r,
    +r
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

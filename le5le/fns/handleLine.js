import go from 'gojs'
export function handleLine(line, collect) {
  const isColorful = Array.isArray(collect)
  const x1 = line.getAttribute('x1')
  const y1 = line.getAttribute('y1')
  const x2 = line.getAttribute('x2')
  const y2 = line.getAttribute('y2')
  const fig = new go.PathFigure(+x1, +y1, false)
  const pathSegment = new go.PathSegment(go.PathSegment.Line, +x2, +y2)
  fig.add(pathSegment)
  if (isColorful) {
    const geo = new go.Geometry()
    geo.add(fig)
    collect.push(go.Geometry.stringify(geo))
  } else {
    collect.add(fig)
  }
}

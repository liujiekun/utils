import go from 'gojs'
export function handleRect(path, collect, shapeInfo) {
  const isColorful = Array.isArray(collect)
  const x = path.getAttribute('x')
  const y = path.getAttribute('y')
  const width = path.getAttribute('width')
  const height = path.getAttribute('height')
  const transform = path.getAttribute('transform')
  const originX = +x || 0
  const originY = +y || 0
  const newGeo = new go.Geometry()
  const fig = new go.PathFigure(originX, originY, true)
  fig
    .add(new go.PathSegment(go.PathSegment.Line, +width + originX, originY))
    .add(
      new go.PathSegment(
        go.PathSegment.Line,
        +width + originX,
        +height + originY
      )
    )
    .add(new go.PathSegment(go.PathSegment.Line, originX, +height + originY))
    .add(new go.PathSegment(go.PathSegment.Line, originX, originY).close())
  newGeo.add(fig)
  const rotateMatch = transform && transform.match(/rotate\((\d+)\)/)
  if (rotateMatch) {
    const angle = rotateMatch[1]
    newGeo.rotate(angle, +width / 2 + originX, +height / 2 + originY)
    fig.isFilled = false
  }
  if (isColorful) {
    collect.push(go.Geometry.stringify(newGeo))
  } else {
    newGeo.figures.each(figure => {
      collect.figures.add(figure)
    })
  }
}

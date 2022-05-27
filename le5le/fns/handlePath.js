import go from 'gojs'
export function handlePath(path, collect) {
  const isColorful = Array.isArray(collect)
  const data = path.getAttribute('d')
  const isFill = path.getAttribute('fill')
  const subgeo = go.Geometry.parse(data, isFill)
  if (isColorful) {
    collect.push(go.Geometry.stringify(subgeo))
  } else {
    subgeo.figures.each(figure => {
      collect.figures.add(figure)
    })
  }
}

import go from 'gojs'
export async function handleText(path, geo) {
  const transform = path.getAttribute('transform')
  const [fromX, fromY] = transform.split(' ')
  const text = path.textContent
  const pathD = text // 需要处理
  const subgeo = go.Geometry.parse(pathD, true)
  subgeo.figures.each(figure => {
    figure.startX = fromX
    figure.startY = fromY
    geo.figures.add(figure)
  })
}

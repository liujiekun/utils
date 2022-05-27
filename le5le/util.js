import go from 'gojs'
import { handleCircle } from './fns/handleCircle'
import { handleLine } from './fns/handleLine'
import { handlePath } from './fns/handlePath'
import { handlePolyLine } from './fns/handlepolyline'
import { handleRect } from './fns/handleRect'
// import { handleText } from './fns/handleText'
import { handleEllipse } from './fns/handleEllipse'

const reflectMap = {
  circle: handleCircle,
  line: handleLine,
  path: handlePath,
  polyline: handlePolyLine,
  polygon: handlePolyLine,
  rect: handleRect,
  // text: handleText,
  ellipse: handleEllipse
}

function generateGeo(node, collect) {
  const tagName = node.tagName
  const handler = reflectMap[tagName]
  handler && handler(node, collect)
}
function handleXdomNode(node, collect) {
  generateGeo(node, collect)
  const childNodes = node.childNodes
  if (childNodes.length) {
    childNodes.forEach(childNode => {
      handleXdomNode(childNode, collect)
    })
  }
}
export function geoFunc(svgstr, isColorful) {
  const xmldoc = new DOMParser().parseFromString(svgstr, 'text/xml')
  const children = xmldoc.childNodes
  const geo = new go.Geometry()
  const geos = []
  for (let i = 0; i < children.length; i++) {
    const child = children[i]
    handleXdomNode(child, isColorful ? geos : geo)
  }
  if (isColorful) {
    return geos
  } else {
    geo.normalize()
    return geo
  }
}

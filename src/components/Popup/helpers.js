export function isBottom (area, element) {
  return area.height < element.y + element.height
}

export function isRight (area, element) {
  return area.width < element.x + element.width
}

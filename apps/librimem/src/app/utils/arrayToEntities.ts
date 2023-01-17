export function arrayToEntities<T extends { id: number }>(entities: T[], idSelector?: (entity: T) => number): { [id: number]: T } {

  return entities.reduce((acc, item) => {
    const newObject: { [id: number]: T } = Object.assign({}, { ...acc })
    newObject[item.id] = item
    return newObject
  }, {})
}


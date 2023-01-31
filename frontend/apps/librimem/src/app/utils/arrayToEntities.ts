export function arrayToEntities<T extends { id: string }>(entities: T[], idSelector?: (entity: T) => number): { [id: number]: T } {

  return entities.reduce((acc, item: T) => {
    const newObject: { [id: string]: T } = Object.assign({}, { ...acc })
    newObject[item.id] = item
    return newObject
  }, {})
}


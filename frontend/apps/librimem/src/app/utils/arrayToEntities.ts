export function arrayToEntities<T extends { id: number }>(entities: T[]) {
  return entities.reduce((acc, item: T) => {
    const newObject: { [id: string]: T } = Object.assign({}, { ...acc })
    newObject[item.id] = item
    return newObject
  }, {})
}


export function entitiesToArray<T>(entities: { [id: string]: T }) {
  const keys = Object.keys(entities)

  return keys.map((key) => entities[key])
}
export function entitiesToArrayKey<T>(entities: { [key: string]: T }) {
  const keys = Object.keys(entities)

  return keys.map((key) => entities[key])
}

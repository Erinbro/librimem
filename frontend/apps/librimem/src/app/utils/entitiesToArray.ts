export function entitiesToArray<T>(entities: { [id: string]: T }) {
  const keys = Object.keys(entities)

  return keys.map((key) => entities[key])
}

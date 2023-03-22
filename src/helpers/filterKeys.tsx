// Given an object, strip out any falsy keys
export const filterKeys = <T extends {}>(obj: T): { [k: string]: unknown } => {
  const truthyKeys = Object.entries(obj).filter(([_, value]) => !!value)
  return Object.fromEntries(truthyKeys)
}
interface IDefault {
  [key: string]: number
}

export function mergeObjs<T extends Record<string, any>>(obj1: T, obj2: T): T {
  const newObj = {} as { [K in keyof T]: string | number }
  for (let key in obj1) {
    newObj[key] = obj1[key] + obj2[key]
  }
  return newObj as T
}

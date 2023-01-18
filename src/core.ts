export function add<T extends number | string | boolean>(...args: T[]) {
  return args.reduce((s, c: any) => s += c, 0)
}

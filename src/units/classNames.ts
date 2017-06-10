export default (obj: { [key: string]: boolean }) =>
  Object.keys(obj).filter(key => obj[key]).join(' ')

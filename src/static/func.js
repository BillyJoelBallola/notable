export const truncate = (str) => {
  const text = str.toString()
  const sliceVal = text.length / 2

  return text.length >= 20 ? text.substring(0, text.length - sliceVal) + "..." : text
}
module.exports = function check(str, bracketsConfig) {

  let i, j, n, strTrans
  i = str.length

  while (i > 0) {
    equalOneElementsStr = str.slice(i, (i + 1))
    n = i
    for (j = 0; j < bracketsConfig.length; j++) {
      strTrans = (bracketsConfig[j][0]) + (bracketsConfig[j][1])
      str = str.replace(strTrans, '')
    }
    i = str.length
    if (n == i) { i = 0 }
  }
  
  return !(str)
}

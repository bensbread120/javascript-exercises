const ftoc = function(temp) {
  let tempConvert = (temp - 32) * (5/9)
  return Number(tempConvert.toFixed(1))

}

const ctof = function(temp) {
  let tempConvert2 = ((temp * (9/5)) + 32)
  return Number(tempConvert2.toFixed(1))
}

module.exports = {
  ftoc,
  ctof
}

// 匹配所有数字的正则
// 还有问题 123e10匹配不来
function numFind(source) {
  const reg =
    /(0\.)|(\.[0-9]*)|(0(?!(o[0-7]|x[0-9A-F]|[eE])))|([1-9][0-9]*\.?(?![eE]))|([1-9][0-9]*\.[0-9]*(?![eE]))|(0o[1-7][0-7]*)|(0x[1-9A-F][0-9A-F]*)|[0-9]*[eE]\-?([1-9][0-9]*)/g

  num = null
  list = []
  do {
    num = reg.exec(source)
    if (!num) break

    list.push(num[0])
  } while (true)

  console.log(list)
}

numFind('123 | .0 | 0 | 0o37 | 0xEF12 | .023 | 0e10 | 0E-10 | 1e100')

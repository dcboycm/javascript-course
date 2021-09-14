mark = {
  weight: 78,
  height: 1.69
}

john = {
  weight: 95,
  height: 1.88
}

mark.bmi = mark.weight / mark.height ** 2
john.bmi = john.weight / john.height ** 2
const markHigherBMI = mark.bmi > john.bmi

console.log([mark, john])
console.log(markHigherBMI)
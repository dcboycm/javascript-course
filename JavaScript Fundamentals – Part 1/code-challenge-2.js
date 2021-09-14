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

if(markHigherBMI) {
  console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`)
}else{
  console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})!`)
}

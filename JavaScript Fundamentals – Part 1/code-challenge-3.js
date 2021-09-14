// dolphins = {
//   game1: 96,
//   game2: 108,
//   game3: 89,
// }

// koalas = {
//   game1: 88,
//   game2: 91,
//   game3: 110,
// }

// dolphins = {
//   game1: 97,
//   game2: 112,
//   game3: 101,
// }

// koalas = {
//   game1: 109,
//   game2: 95,
//   game3: 123,
// }

dolphins = {
  game1: 97,
  game2: 112,
  game3: 101,
}

koalas = {
  game1: 109,
  game2: 95,
  game3: 106,
}

dolphins.average = (dolphins.game1 + dolphins.game2 + dolphins.game3) / 3
koalas.average = (koalas.game1 + koalas.game2 + koalas.game3) / 3

console.log(`The dolphins average was: ${dolphins.average}`)
console.log(`The koalas average was: ${koalas.average}`)

if(dolphins.average > 100 && dolphins.average > koalas.average) {
  console.log(`The winner of the competition was the Dolphins!`)
} else if(dolphins.average === koalas.average) {
    console.log(`There was a draw`)
} else if (koalas.average > 100 && koalas.average > dolphins.average) {
  console.log(`The winner of the competition was the Koalas!`)
} else {
  console.log('No team averaged over 100, this is a draw.')
}
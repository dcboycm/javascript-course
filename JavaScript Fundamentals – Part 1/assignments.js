const country = "United States of America";
const continent = "North America";
let population = 328;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "English";
// isIsland = true;

console.log('Population divided by 2', population / 2);
console.log('Population plus 1', population += 1);
console.log('The US has more people than Finland:', population >= 6);
console.log('The US has more people than the average country:', population >= 33);
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`
console.log(description)
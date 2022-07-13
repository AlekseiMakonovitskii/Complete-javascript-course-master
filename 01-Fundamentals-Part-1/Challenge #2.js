// const markHeight = 1.69;
// const markMass = 78;
// const johnHeight = 1.95;
// const johnMass = 92;

const markHeight = 1.88;
const markMass = 95;
const johnHeight = 1.76;
const johnMass = 85; 

const markBMI = markMass / (markHeight * markHeight);
const jonhBMI = johnMass / (johnHeight * johnHeight);

console.log(markBMI, jonhBMI);

if (markBMI > jonhBMI) {
	console.log(`Mark's BMI ${(markBMI)} is higher than John's ${(jonhBMI)}!`);
} else {
	console.log(`John's BMI ${(jonhBMI)} is higher than Mark's ${(markBMI)}!`);
}

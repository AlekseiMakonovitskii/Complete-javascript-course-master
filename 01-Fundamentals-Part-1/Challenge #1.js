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

const markHigherBMI = markBMI > jonhBMI;

console.log(markBMI, jonhBMI, markHigherBMI);

const bill = 430;
const tipProcent = bill >= 50 && bill <= 300 ? 15 : 20;
const tipValue = (bill / 100) * tipProcent;
console.log(`“The bill was ${bill}, the tip was ${tipValue}, and the total value
${bill + tipValue}`);

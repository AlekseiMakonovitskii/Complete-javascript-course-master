`use strict`
const calcTip = function(bill) {
	const tipProcent = bill >= 50 && bill <= 300 ? 15 : 20;
	const tipValue = (bill / 100) * tipProcent;
	return tipValue;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
	const tip = calcTip(bills[i]);
	tips.push(tip);
	totals.push(bills[i] + tip);
}

console.log(bills, tips, totals);


const calcAverage = function(arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));
console.log(calcAverage(bills));

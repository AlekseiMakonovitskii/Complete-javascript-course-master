`use strict`
const calcTip = function(bill) {
	const tipProcent = bill >= 50 && bill <= 300 ? 15 : 20;
	const tipValue = (bill / 100) * tipProcent;
	return tipValue;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(totals);

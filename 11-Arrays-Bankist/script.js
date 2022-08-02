'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ``;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const caclDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUserNames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(` `)
      .map(word => word[0])
      .join('');
  });
};
createUserNames(accounts);
console.log(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  caclDisplaySummary(acc);
};

//Event handler
let currentAccount;

btnLogin.addEventListener(`click`, function (e) {
  // prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = `1`;
    // Clear input fields
    inputLoginUsername.value = ``;
    inputLoginPin.value = ``;
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener(`click`, function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = ``;
  inputTransferTo.value = ``;

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener(`click`, function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = ``;
});

btnClose.addEventListener(`click`, function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = ``;
  inputClosePin.value = ``;
});

let sorted = false;
btnSort.addEventListener(`click`, function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// ARRAY METHODS PRACTICE

// 1.
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, cur) => acc + cur, 0);

// console.log(bankDepositSum);

// // 2.

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposits1000);

// const numDeposits1000Reduce = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// console.log(numDeposits1000Reduce);

// // Prifexed ++ operator
// let a = 10;
// console.log(++a);
// console.log(a);

// // 3.
// const { deposits, widthrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.widthrawals += cur);
//       sums[cur > 0 ? `deposits` : `widthrawals`] += cur;
//       return sums;
//     },
//     { deposits: 0, widthrawals: 0 }
//   );
// console.log(deposits, widthrawals);

// // 4.
// const bankDepositSumReducer = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, cur) => (cur > 0 ? acc + cur : acc + 0), 0);
// console.log(bankDepositSumReducer);

// // 5.
// // this is a nice title -> This Is a Nice Title
// const converTitileCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = [`a`, `an`, `the`, `but`, `or`, `on`, `in`, `with`, `and`];

//   const titleCase = title
//     .toLowerCase()
//     .split(` `)
//     .map(word =>
//       exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(` `);

//   return capitalize(titleCase);
// };

// console.log(converTitileCase(`this is a nice title`));
// console.log(converTitileCase(`this is a LONG title but not too long`));
// console.log(converTitileCase(`and here is another title with an EXAMPLE`));
// SUMMARY WHICH ARRAY METHOD TO USE

// MORE WAYS OF CREATING FILLING ARRAYS
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// const x = new Array(7);
// console.log(x);
// // x.map(() => 5);
// // console.log(x);

// // x.fill(1);
// x.fill(1, 3, 5);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// // Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// const randoms = Array.from({ length: 100 }, () =>
//   Math.floor(Math.random() * 100)
// );
// console.log(randoms);

// labelBalance.addEventListener(`click`, function () {
//   const movementsUI = Array.from(document.querySelectorAll(`.movements__value`),
//   el => Number(el.textContent.replace(`€`, ``))
//   );

//   console.log(movementsUI);
// });

// const movementsUI2 = [...document.querySelectorAll(`.movements__value`)];

// SORTING ARRAYS

// Strings
// const owners = [`Jonas`, `Zach`, `Adam`, `Martha`];
// console.log(owners.sort());
// console.log(owners);

// // Numbers
// console.log(movements);

// // retrun < 0, A, B (keep order)
// // return > 0, B, A (switch order)

// // Ascending
// // movements.sort((a, b) => {
// //   if (a > b) {
// //     return 1;
// //   }
// //   if (b > a) {
// //     return -1;
// //   }
// // });

// movements.sort((a, b) => a - b);
// console.log(movements);

// // Discending
// // movements.sort((a, b) => {
// //   if (a > b) {
// //     return -1;
// //   }
// //   if (b > a) {
// //     return 1;
// //   }
// // });

// movements.sort((a, b) => b - a);
// console.log(movements);

// FLAT AND FLATMAP METHODS
// flat

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// // flatmap

// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

// SOME AND EVERY METHODS
// SOME

// Equality
// console.log(movements);
// console.log(movements.includes(-130));

// // Condition
// console.log(movements.some(mov => mov === -130));

// const anyDeposits = movements.some(mov => mov > 150);
// console.log(anyDeposits);

// // EVERY
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // Separate callback

// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// FINDINDEX METHOD

// FIND METHOD
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === `Jessica Davis`);
// console.log(account);

// let accountFor;
// for (const acc of accounts) {
//   if (acc.owner === `Jessica Davis`) {
//     accountFor = acc;
//   }
// }

// console.log(accountFor);

// MAGIC OF CHAINING METHODS
// const eurToUsd = 1.1;
// console.log(movements);

// // pipeline
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     //  console.log(arr);
//     return mov * eurToUsd;
//   })
//   // .map((mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// // DATA TRANSFORMATIONS MAP, FILTER, REDUCE

// Reduce
// console.log(movements);

// // accumulator -> SNOWBALL
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2);

// // Maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);
// console.log(max);

// Filter
// const deposits = movements.filter(mov => mov > 0);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositsFor.push(mov);
//   }
// }
// console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);
// Map

// const eurToUsd = 1.1;
// // const movementsUSD = movements.map(function(mov) {
// //   return mov * eurToUsd;
// // });

// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }

// console.log(movementsUSDfor);

// const movementsDesciptions = movements.map((mov, i) => `Movement ${i + 1} You ${mov > 0 ? `deposited` : `withdrew`} ${Math.abs(mov)}`);

// console.log(movementsDesciptions);

// CREATING DOM ELEMENT
// up there
// FOREACH WITH MAPS AND SETS

// Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// })

// // Set
// const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`, `EUR`]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value}: ${value}`);
// })

// LOOPING ARRAY, FOREACH
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
//   for (const [i, movement] of movements.entries()) {
//     if (movement > 0) {
//       console.log(`Movement ${i + 1} You deposited ${movement}`);
//     } else {
//       console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
//     }
// }

// console.log(`---FOREACH---`);

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1} You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`);
//   }
// });
// 0: function(200);
// 1: function(450);
// 2: function(400);

// THE NEW AT METHOD
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));
// //getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log(`jonas`.at(0));
// console.log(`jonas`.at(-1));

// SIMPLE ARRAY METHODS
// // Slice (create new array)
// let arr = [`a`, `b`, `c`, `d`, `e`];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); // shallow copy
// console.log([...arr]);
// console.log(arr);

// // Splice (mutate array)
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // Reverse (mutate array)
// arr = [`a`, `b`, `c`, `d`, `e`];
// const arr2 = [`j`, `i`, `h`, `g`, `f`];
// console.log(arr2.reverse());
// console.log(arr2);

// // concat (create new array)
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // Join (return string)
// console.log(letters.join(` - `));

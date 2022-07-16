// // Remember, we're gonna use strict mode in all scripts now!
'use strict';

// // const x = 23;
// // if (x === '23') {
// //   console.log(23);
// // }

// // const calcAge = birthYear => 2037 - birthYear;

// // console.log(x);

// // SOLVE PROBLEM WITH USING GOOGLE, STUCKOVERFLOW AND MDN

// const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

// console.log(temperatures)

// // PROBLEM 1
// // 1) Understandint the problem
// //  - Wht is temp amplitude? Answer: difference between highest and lowest temmo
// // - How to compute max and min temperatures?
// // - What's a sensor error? And waht to do?

// // 2) Breaking up into sub-problems
// // - How to ignore errors?
// // - Find max value in temp array
// // - Find min value in temp array
// // - Substact min from max (amplitude) and return it

// const calcTempAmplitude = function(temps) {
  
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') {
//       continue;
//     }

//     if (curTemp < min) {
//       min = curTemp;
//     }

//     if (curTemp > max) {
//       max = curTemp;
//     }
//   }

//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);


// // PROBLEM 2
// // function should now receive 2 array of temps

// // 1) understanding the problem
// // - With 2 arrays , should we implement functionality twce? NO, Just merge two arrays

// // 2) Breaking up into sub-problems
// // - merge to arrays

// const calcTempAmplitudeNew = function(t1, t2) {

//   const temps = t1.concat(t2);
//   console.log(temps);
  
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') {
//       continue;
//     }

//     if (curTemp < min) {
//       min = curTemp;
//     }

//     if (curTemp > max) {
//       max = curTemp;
//     }
//   }

//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);

// console.log(amplitudeNew);


// DEBUGGING PROCESS (FIXING ERRORS)

const measureKelvin = function(value) {
  const measurement = {
    type: `temp`,
    unit: `celsius`,
    // c)FIX THE BUG
    value: Number(value)
  }

  // b) FIND THE BUG
  console.table(measurement)

  const kelvin = measurement.value + 273;
  return kelvin;
}

// a) IDENTIFY BUG
const prompValue = '10';
console.log(measureKelvin(prompValue));


// using debugger

const calcTempAmplitudeBug= function(t1, t2) {

  const temps = t1.concat(t2);
  console.log(temps);
  
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') {
      continue;
    }

    if (curTemp < min) {
      min = curTemp;
    }

    if (curTemp > max) {
      max = curTemp;
    }
  }

  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

console.log(amplitudeBug);
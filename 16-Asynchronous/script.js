'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// 246 Asynchronous JavaScript, AJAX and APIs
// async code is executed after a task that runs in the 'background' finished;
// async cide is non-blocking
// Execution doesn't wait for an async task to fihish its work

// 248 Our First AJAX Call_ XMLHttpRequest
// const getCounteryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(`GET`, `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener(`load`, function () {
//     console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
// 		<article class="country">
// 			<img class="country__img" src="${data.flag}" />
// 			<div class="country__data">
// 				<h3 class="country__name">${data.name}</h3>
// 				<h4 class="country__region">${data.region}</h4>
// 				<p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
//           1
//         )}</p>
// 				<p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
// 				<p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// 			</div>
// 		</article>
// 	`;

//     countriesContainer.insertAdjacentHTML(`beforeend`, html);
//     countriesContainer.style.opacity = `1`;
//   });
// };

// getCounteryData(`portugal`);
// getCounteryData(`usa`);
// getCounteryData(`russia`);
// getCounteryData(`germany`);

// 249 [OPTIONAL] How the Web Works_ Requests and Responses
// 250 Welcome to Callback Hell

// const getCounteryDataAndNeighbor = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open(`GET`, `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener(`load`, function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderContry(data);

//     // Get neighbor cointry (2)
//     const [neighbour] = data.borders;

//     if (!neighbour) {
//       return;
//     }

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open(`GET`, `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener(`load`, function () {
// 			const data2  = JSON.parse(this.responseText);
// 			console.log(data2);

// 			renderContry(data2, `neighbour`);
// 		});
//   });
// };

// // getCounteryDataAndNeighbor(`portugal`);
// getCounteryDataAndNeighbor(`usa`);

// // callback hell
// setTimeout(() => {
// 	console.log(`1 seceond passed`);

// 	setTimeout(() => {
// 		console.log(`2 seceond passed`);

// 		setTimeout(() => {
// 			console.log(`3 seceond passed`);

// 			setTimeout(() => {
// 				console.log(`4 seceond passed`);
// 			}, 1000)
// 		}, 1000)
// 	}, 1000)
// }, 1000)

// 251 Promises and the Fetch API
// old way
// const request = new XMLHttpRequest();
// request.open(`GET`, `https://restcountries.com/v2/name/${country}`);
// request.send();

// 253 Chaining Promises

const renderContry = function (data, classname = ``) {
  const html = `
			<article class="country ${classname}">
				<img class="country__img" src="${data.flag}" />
				<div class="country__data">
					<h3 class="country__name">${data.name}</h3>
					<h4 class="country__region">${data.region}</h4>
					<p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
            1
          )}</p>
					<p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
					<p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
				</div>
			</article>
		`;

  countriesContainer.insertAdjacentHTML(`beforeend`, html);
  countriesContainer.style.opacity = `1`;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText(`beforeend`, msg);
};

const getJSON = function (url, errorMsg = `Something went wrong`) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }

    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1

  getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found`)
    .then(data => {
      renderContry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) {
        throw new Error(`No neighbour found!`);
      }

      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        `Country not found`
      );
    })
    .then(data => renderContry(data, `neighbour`))
    .catch(error => {
      console.error(`${error} 😥`);
      renderError(`Something went wrong 😥😥😥 ${error.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = `1`;
    });
};

// btn.addEventListener(`click`, () => {
//   getCountryData(`Australia`);
// });

// getCountryData(`usa`);
// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }

//       return response.json();
//     })
//     .then(data => {
//       renderContry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = `afafafa`;

//       if (!neighbour) {
//         return;
//       }

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }

//       return response.json();
//     })
//     .then(data => renderContry(data, `neighbour`))
//     .catch(error => {
//       console.error(`${error} 😥`);
//       renderError(`Something went wrong 😥😥😥 ${error.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = `1`;
//     });
// };

// btn.addEventListener(`click`, () => {
//   getCountryData(`usa`);
// });

// 254 Handling Rejected Promises
// getCountryData(`usfafaffafafaa`);

// 255 Throwing Errors Manually

// 257 Asynchronous Behind the Scenes_ The Event Loop
// 258 The Event Loop in Practice
// console.log(`Test start`);
// setTimeout(() => console.log(`0 sec timner`), 0)
// Promise.resolve(`Resolved primise 1`).then(res => console.log(res));
// Promise.resolve(`Resolve promise 2`).then(res => {
//   for (let i = 0; i < 5000; i++) {
//     console.log(res)
//   }
// })
// console.log(`Test end`);

// 259 Building a Simple Promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(`Lottery draw is heppening 🎩`);

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve(`You WIN 😍`);
//     } else {
//       reject(new Error(`You lost your money 💩`));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// // Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log(`1 second passed`);

//     return wait(1);
//   })
//   .then(() => {
//     console.log(`2 seconds passed`);

//     return wait(1);
//   })
//   .then(() => {
//     console.log(`3 seconds passed`);

//     return wait(1);
//   })
//   .then(() => {
//     console.log(`4 seconds passed`);

//     return wait(1);
//   });

// Promise.resolve(`abc`).then(res => console.log(res));
// Promise.reject(new Error(`abc`)).catch(err => console.log(err))

// 260 Promisifying the Geolocation API

// const getPosition = function () {
//   return new Promise((resolve, reject) => {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );

//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=442089444243864387686x61880`
//       );
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Too many requests!`);
//       }

//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(`Country not found (${res.status})`);
//       }

//       return res.json();
//     })
//     .then(data => {
//       renderContry(data[0]);
//       countriesContainer.style.opacity = `1`;
//     })

//     .catch(error => console.log(error));
// };

// btn.addEventListener(`click`, whereAmI);

// 262 Consuming Promises with Async_Await

// const getPosition = function () {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Revese geocoding
//     const resGeo = await fetch(
//       `https://geocode.xyz/${lat},${lng}?geoit=json&auth=442089444243864387686x61880`
//     );

//     if (!resGeo.ok) {
//       throw new Error(`Problem getting location data`);
//     }

//     const dataGeo = await resGeo.json();

//     // Country data
//     // fetch(`https://restcountries.com/v2/name/${country}`)
//     // .then(res => console.log(res))

//     const res = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.country}`
//     );

//     if (!res.ok) {
//       throw new Error(`Problem getting contry`);
//     }

//     const data = await res.json();
//     renderContry(data[0]);

//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     renderError(`Something went wrong 😥 ${err.message}`);

//     //Reject promise returned from async function
//     throw err;
//   }
// };

// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log(`3: Finished getting location`))

// (async function () {
//   console.log(`1: Will get location`);

//   try {
//     const city = await whereAmI();
//     console.log(city);
//   } catch (err) {
//     console.error(`2: ${err.message}`)
//   }

//   console.log(`3: Finished getting location`);
// })();

// 263 Error Handling With try...catch
// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   console.error(err);
// }

// 264 Returning Values from Async Functions

// 265 Running Promises in Parallel
// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

//     // console.log([data1.capital, data2.capital, data3.capital]);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);

//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.log(err);
//   }
// };

// get3Countries(`portugal`, `canada`, `russia`);

// // 266 Other Promise Combinators_ race, allSettled and any
// // Promise.race
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/italy`),
//     getJSON(`https://restcountries.com/v2/name/egypt`),
//     getJSON(`https://restcountries.com/v2/name/mexico`),
//   ]);

//   console.log(res[0].capital);
// })();

// const timeout = function (sec) {
//   return new Promise((_, reject) => {
//     setTimeout(() => {
//       reject(new Error(`Request took too long!`));
//     }, sec * 1000);
//   });
// };

// Promise.race([getJSON(`https://restcountries.com/v2/name/russia`), timeout(1)])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

//   // Promise.allSettled
//   Promise.allSettled([
//     Promise.resolve(`Success`),
//     Promise.reject(`ERROR`),
//     Promise.resolve(`Another Success`),
//   ]).then(res => console.log(res))

//   Promise.all([
//     Promise.resolve(`Success`),
//     Promise.reject(`ERROR`),
//     Promise.resolve(`Another Success`),
//   ]).then(res => console.log(res))
//   .catch(err => console.log(err))

//   // Promise.any
//   Promise.any([
//     Promise.resolve(`Success`),
//     Promise.reject(`ERROR`),
//     Promise.resolve(`Another Success`),
//   ]).then(res => console.log(res))
//   .catch(err => console.log(err))


const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=442089444243864387686x61880`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(`Too many requests!`);
      }

      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`Country not found (${res.status})`);
      }

      return res.json();
    })
    .then(data => {
      renderContry(data[0]);
      countriesContainer.style.opacity = `1`; 
    })

    .catch(error => console.log(error));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

const images = document.querySelector(`.images`);

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const image = document.createElement(`img`);
    image.src = `${imgPath}`;

    image.addEventListener(`load`, () => {
      images.append(image);
      resolve(image);
    });

    image.addEventListener(`error`, () => {
      const err = new Error(`Image not found`);
      reject(err);
    });
  });
};

// const loadNPause = async function () {
//   try {
//     // Image 1
//     let img = await createImage(`./img/img-1.jpg`);
//     await wait(2);
//     img.style.display = `none`;

//     // Image 2
//     img = await createImage(`./img/img-2.jpg`);
//     await wait(2);
//     img.style.display = `none`;

//     // Image 3
//     img = await createImage(`./img/img-3.jpg`);
//   } catch (err) {
// 		console.log(err);
// 	}
// };

// loadNPause();

const imagesArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async src => await createImage(src));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
		imgsEl.forEach(img => img.classList.add(`parallel`));
		console.log(imgsEl);
  } catch (err) {
    console.log(err);
  }
};

loadAll(imagesArr);

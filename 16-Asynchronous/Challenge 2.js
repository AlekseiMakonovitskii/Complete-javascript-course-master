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

let currentImage;

createImage(`./img/img-1.jpg`)
  .then(img => {
    currentImage = img;
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = `none`;
    return createImage(`./img/img-2.jpg`);
  })
  .then(img => {
    currentImage = img;
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = `none`;
    return createImage(`./img/img-3.jpg`);
  })
  .catch(err => console.log(err));

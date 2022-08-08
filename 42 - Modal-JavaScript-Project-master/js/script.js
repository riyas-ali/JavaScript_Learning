storeItems = document.querySelectorAll(".store-item");
lightBox = document.querySelector(".lightbox-container");
lightBoxItem = document.querySelector(".lightbox-item");
images = document.querySelectorAll(".store-img");

imageList = [];
imageCounter = 0;

images.forEach((element) => {
  imageList.push(element.src);
});

storeItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    image = e.target.src;
    lightBoxItem.style.backgroundImage = `url(${image})`;
    lightBox.classList.add("show");
    imageCounter - imageList.indexOf(image);
  });
});

modalBtn = document.querySelectorAll(".lightbox-control");
modalBtn.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("btnLeft")) {
      imageCounter--;
      if (imageCounter < 0) {
        imageCounter = imageList.length - 1;
      }
      lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
    } else if (item.classList.contains("btnRight")) {
      imageCounter++;
      if (imageCounter >= imageList.length) {
        imageCounter = 0;
      }
      lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
    }
  });
});

let lightBoxClose = document.querySelector(".lightbox-close");
lightBoxClose.addEventListener("click", () => {
  lightBox.classList.remove("show");
});

import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  const isGallerySwatchItem = evt.target.classList.contains("gallery__image");

  if (!isGallerySwatchItem) {
    return;
  }
  
  const instance = basicLightbox.create(
    `<img src= "${evt.target.dataset.source}" width="800" height="600">`
  );

  instance.show();

  //   console.log(evt.target.dataset.source);
}

function onEscKeyPress(evt) {
  if (evt.code === "Escape") {
    return;
  }
  instance.close();
}

import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);

galleryContainer.addEventListener("click", onGalleryItemClick);

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


function onGalleryItemClick(evt) {
     console.log(evt.target.dataset.source);

   evt.preventDefault();
  const isGallerySwatchItem = evt.target.classList.contains('.gallery__item');
//   const isGallerySwatchItem = evt.target.classList.contains("img");

  if (!isGallerySwatchItem) {
    return;
  }

    // console.log(evt.target.dataset.source);
const instance = basicLightbox.create
    (`<img src= "${evt.target.dataset.source}" width="800" height="600">`,
    {
                onShow: () => {
                    window.addEventListener('keydown', onEscKeyPress);
                },
                onClose: () => {
                    window.removeEventListener('keydown', onEscKeyPress);
                },
            });
  instance.show();

//   console.log(evt.target.dataset.source);
}

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const addItems = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item"> <a class="gallery__link" href="${item.original}"> <img class="gallery__image" src="${item.preview}" alt="${item.description}" /> </a></li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", addItems);

var lightbox = new SimpleLightbox(".gallery li a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  scrollZoom: false,
});
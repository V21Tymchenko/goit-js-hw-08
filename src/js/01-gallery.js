// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);
// console.log(SimpleLightbox);
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const divRef = document.querySelector('.gallery');

const galleryMarkUp = createGalleryMarkUp(galleryItems);

divRef.insertAdjacentHTML('beforeend', galleryMarkUp);

divRef.addEventListener('click', onItemClick);

function createGalleryMarkUp(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}
let gallery = new SimpleLightbox('.gallery a', {
  nav: true,
  close: true,
  captionsData: 'alt',
  captionDelay: 250,
});

function onItemClick(evt) {
  // заборона відкривання у новому вікні картинки по посиланню
  evt.preventDefault();
}

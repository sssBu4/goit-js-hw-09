import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://i.postimg.cc/mD0ywjNW/1-2.png',
    original:
      'https://i.postimg.cc/3RdktD3X/1.png',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://i.postimg.cc/ZKmqd3t9/2.png',
    original:
      'https://i.postimg.cc/ZKmqd3t9/2.png',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://i.postimg.cc/zDKBv7MZ/3.png',
    original:
      'https://i.postimg.cc/zDKBv7MZ/3.png',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://i.postimg.cc/SR6NPQ8N/1-1.png',
    original:
      'https://i.postimg.cc/SR6NPQ8N/1-1.png',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://i.postimg.cc/jj15wFtK/2-1.png',
    original:
      'https://i.postimg.cc/jj15wFtK/2-1.png',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://i.postimg.cc/TP11P68C/3-1.png',
    original:
      'https://i.postimg.cc/TP11P68C/3-1.png',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://i.postimg.cc/DyQ8j6dd/1-2.png',
    original:
      'https://i.postimg.cc/DyQ8j6dd/1-2.png',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://i.postimg.cc/SxDjqKPn/2-2.png',
    original:
      'https://i.postimg.cc/SxDjqKPn/2-2.png',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://i.postimg.cc/L8TgXDJ6/3-2.png',
    original:
      'https://i.postimg.cc/L8TgXDJ6/3-2.png',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryMarkup = images
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`
  )
  .join('');

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});
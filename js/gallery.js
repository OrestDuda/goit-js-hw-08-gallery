import array from './gallery-items.js';
const unorderedList = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');
const overlay = document.querySelector('div.lightbox__overlay');

array.map(arr => {
  const li = document.createElement('li');
  li.classList.add('gallery__item');
  unorderedList.append(li);

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.setAttribute('href', arr.original);
  li.append(link);

  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.setAttribute('src', arr.preview);
  img.setAttribute('alt', arr.description);
  img.setAttribute('data-source', arr.original);
  link.append(img);
});

unorderedList.addEventListener('click', event => {
  if (event.target.nodeName === 'IMG') {
    event.preventDefault();
    const largeImage = event.target.getAttribute('data-source');
    const lightbox_image = document.querySelector('.lightbox__image');

    function clear() {
      lightbox.classList.remove('is-open');
      lightbox_image.setAttribute('src', '');
    }

    lightbox.classList.add('is-open');

    lightbox_image.setAttribute('src', largeImage);

    closeBtn.addEventListener('click', clear);
  }
});

overlay.addEventListener('click', () => {
  lightbox.classList.remove('is-open');
});

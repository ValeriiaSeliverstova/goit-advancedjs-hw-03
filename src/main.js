import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.form');
const input = document.querySelector('input[name="search-input"]');

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    return iziToast.error({
      title: '',
      message: 'Please enter a search query!',
    });
  }

  fetchImages(query)
    .then(result => {
      renderImages(result);
    })
    .catch(error => {
      throw error.message;
    });
});

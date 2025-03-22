const BASE_URL = 'https://pixabay.com/api/';

const API_KEY = '49479304-89a48f16eaa5319308b7de96a';

export function showLoader() {
  document.querySelector('.loader').style.display = 'block';
}

export function hideLoader() {
  document.querySelector('.loader').style.display = 'none';
}

export function fetchImages(query) {
  showLoader();
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
      query
    )}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(result => result.hits)
    .catch(error => {
      throw error;
    })
    .finally(() => {
      hideLoader();
    });
}

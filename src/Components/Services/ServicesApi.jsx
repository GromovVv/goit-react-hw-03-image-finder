import axios from 'axios'

const BASE_URL = 'https://pixabay.com/api/?';
const KEY = '20622513-c51f7eb41b150be27698c4819';

const fetchImg = ({ pageNumber = 1, query = '' }) => {
  return  axios
  .get(`${BASE_URL}q=${query}&page=${pageNumber}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
  .then(response => response.data.hits);
};

export default { fetchImg };

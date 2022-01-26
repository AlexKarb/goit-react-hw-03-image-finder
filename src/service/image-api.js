import axios from 'axios';
axios.defaults.baseURL = `https://pixabay.com/api`;

const DATA_API = {
  key: '24460991-e6b86f63e9df1bcb3be279c62',
  q: null,
  image_type: 'photo',
  orientation: 'horizontal',
  page: '1',
  per_page: '12',

  createApiConfiguration() {
    return Object.entries(this)
      .map(type => type.join('='))
      .join('&');
  },
};

const getImages = async (searchRequest, page) => {
  DATA_API.q = searchRequest;
  DATA_API.page = page;

  const response = await axios(`?${DATA_API.createApiConfiguration()}`);

  return new Promise((resolve, reject) => {
    if (response.data.hits.length > 0) {
      resolve(response.data);
    } else {
      reject('Not found images');
    }
  });
};

const api = {
  getImages,
};

export default api;

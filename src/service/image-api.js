import axios from 'axios';
axios.defaults.baseURL = `https://pixabay.com/api`;

const DATA_API = {
  key: '24460991-e6b86f63e9df1bcb3be279c62',
  q: null,
  image_type: 'photo',
  orientation: 'horizontal',
  page: '1',
  per_page: '12',
};

const createApiConfiguration = data =>
  Object.entries(data)
    .map(type => type.join('='))
    .join('&');

const getImages = async (searchRequest, page) => {
  DATA_API.q = searchRequest;
  DATA_API.page = page;

  const res = await axios(`?${createApiConfiguration(DATA_API)}`);
  return await res.data;
};

export default getImages;

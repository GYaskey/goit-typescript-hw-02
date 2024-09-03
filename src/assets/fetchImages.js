import axios from 'axios';

export const fetchImages = async ({ query, page = 1 }) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      client_id: 'fALGFJ4v2oD6wVqz4p4eGwHmTIFeKnOmj0F38cl1zaI',
      per_page: 12,
      orientation: 'landscape',
      query,
      page,
    },
  });

  return response.data;
};

import { Images } from '../App.types';
import axios from 'axios';

interface Props {
  query: string;
  page: number;
}

interface FetchImages {
  results: Images[];
  total: number;
  total_pages: number;
}

export const fetchImages = async ({
  query,
  page = 1,
}: Props): Promise<FetchImages> => {
  try {
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
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch images from the API: ${error.message}`);
    } else {
      throw new Error('Failed to fetch images from the API: Unknown error');
    }
  }
};

import { Fact } from '../types/facts';
import { API_BASE_URL } from '../config/api';

const FactsApi = {
  read: async (): Promise<Fact[]> => {
    try {
      const data = await (await fetch(`${API_BASE_URL}/facts`)).json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default FactsApi;

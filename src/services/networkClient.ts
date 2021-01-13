import axios  from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

const networkClient = {
  post: async (url: string, body?: Record<string, unknown>) => {
    return await axios.post(url, body) as Record<string, unknown>;
  },
};

export default networkClient;

import axios from 'axios';

const httpClient = axios.create({ baseURL: import.meta.env.VITE_API_URL });

httpClient.interceptors.response.use(
  (response) => {
    return response.data.data;
  },
  (error) => {
    if (error.response) {
      const errorMessage = error.response.data.error?.message || 'Error desconocido';
      return Promise.reject(new Error(errorMessage));
    } else {
      return Promise.reject(new Error('Error de conexión con el servidor'));
    }
  }
);
export default httpClient;
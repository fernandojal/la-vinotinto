// Vendors
import axios, { AxiosInstance } from 'axios';
import { APP_API_URL } from 'mocks/config';

/**
 * Definición de la conexión con la API
 */

const API: AxiosInstance = axios.create({
  baseURL: APP_API_URL,
});

export default API;

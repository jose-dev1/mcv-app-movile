import axios from 'axios';

export const AXIOS = axios.create({
  baseURL: 'https://mcv-backend-deploy.vercel.app',
})
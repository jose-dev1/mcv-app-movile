import axios from 'axios';

export const AXIOS = axios.create({
  baseURL: 'http://192.168.6.171:4321',
})
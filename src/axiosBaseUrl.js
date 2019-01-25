const axios = require('axios');

export const axiosInit = axios.create({
  baseURL: process.env.BASE_URL
});

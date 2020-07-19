import axios from 'axios';

const api = axios.create({
    baseURL: 'https://5f127069d5e6c90016ee504e.mockapi.io/api/v1/'
});

export default api;

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://online-store-2a932.firebaseio.com/',
});

export default instance;
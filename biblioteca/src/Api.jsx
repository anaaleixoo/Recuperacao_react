import axios from 'axios';

const apiLocal = `https://gutendex.com/books/`

const api = axios.create({
    baseURL:apiLocal
})

export default api;
import axios from "axios"

// axios.defaults.baseURL = 'http://localhost:8080/api';
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        "Content-type": 'application/json'
    }
})

export default instance;
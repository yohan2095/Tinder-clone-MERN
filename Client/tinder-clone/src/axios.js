import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://yhn-tinder.herokuapp.com',
})

export default instance;
import axios from 'axios';

export default axios.create({
  baseURL: 'http://www.localhost:8080/',
  responseType: 'json',
});

import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'https://rhythmedu-a12.vercel.app/api',
  baseURL: 'http://localhost:5001/',
  // withCredentials: true,
});

axiosInstance.interceptors.response.use(
  response => {
    // response.headers['Access-Control-Allow-Origin'] = '*';
    // response.headers['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
    // response.headers['Access-Control-Allow-Credentials'] = true;

    return response;
  },
  error => {
    if (error.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.log('Error', error.message);
    }
    console.log(error.config);

    // You can also throw a custom error or perform any other error handling logic here

    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(request => {
  // console.log('Starting Request', request)

  // console.log(localStorage.getItem('jwttoken'));
  request.headers.authorization =   `Bearer ${localStorage.getItem('access_token')}` || null;


  return request
}, (error) => {
  console.log('Request Error', error)
  return Promise.reject(error)
});
export default axiosInstance;

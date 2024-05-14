/**
 * axios setup to use mock service
 */

import axios from "axios";


const axiosServices = axios.create();

axiosServices.defaults.baseURL = ''; //default base url

// interceptor for http
axiosServices.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // if the token is expired. page will be redirecting to login
      if(error.response.status === 401){
        if(localStorage.getItem('user')){
          alert('Your Token is expired. Please re-login')
          localStorage.removeItem('user')
          window.location.href = '/'
        }

      }
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.log("No response received:", error.request);
      return Promise.reject("No response received");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error setting up the request:", error.message);
      return Promise.reject("Error setting up the request");
    }
  }
    //Promise.reject((error.response && error.response.data) || "Wrong Services")
);

export default axiosServices;


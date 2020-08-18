import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// global configuration - base url
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// global header
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// if you want to set content type you're sending to applicatin.json, which is not necessary cause it is the default
axios.defaults.headers.post['Content-Type'] = 'application/json';

// we can add interceptors to handle error
axios.interceptors.request.use(request => {
    console.log(request);
    // always need to return the request or the request config otherwise you are blocking the request
    return request
},
    // we can also pass a second function besides that request configuration changing function 
    // we can add a functions that handles any error
    err => {
        console.log(err);
        // the code below allows us to access it in the component were we make the request so we 
        // can handle it again using catch method
        return Promise.reject(err)
    }
);

// we can add interceptors to handle response
axios.interceptors.response.use(
    // one function to receive the success response
    response => {
        console.log(response);
        return response;
    },
    err => {
        console.log(err);
        return Promise.reject(err)
    }
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

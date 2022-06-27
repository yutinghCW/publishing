import axios from 'axios'

export default function ({store, redirect, req, router, $axios })  {
  $axios.defaults.baseURL = process.env.books_api;

  $axios.interceptors.response.use(
    response => {
      return response
    },
    error => {
      axios.post(`${process.env.books_api}/oauth/web`)
        .then(response => {
          localStorage.setItem(
            'cw_publishing_token', `${response.data.items[0].type} ${response.data.items[0].access_token}`
          );
          axios.defaults.headers['authorization'] = `${response.data.items[0].type} ${response.data.items[0].access_token}`;
        })
      return Promise.reject(error.response);
    })
}

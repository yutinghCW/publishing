import axios from 'axios'

export default function (context) {

  let authorization = '';

  context.$axios
    .post(`${process.env.books_api}/oauth/web`)
    .then(response => {
      authorization = `${response.data.items[0].type} ${response.data.items[0].access_token}`;
      axios.defaults.headers['authorization'] = authorization ;
    })

}

import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import axios from 'axios';

const server = 'http://localhost:3333';

const app = feathers();

// Connect to a different URL
const restClient = rest(server);

// Configure an AJAX library (see below) with that client
app.configure(restClient.fetch(window.fetch.bind(window)));

export default app;

export const get = (path, params = {}) => axios.get(`${server}/${path}`, { params })
  .then(({ data }) => data)
  .catch((err) => Promise.reject(_.get(err, 'response.data.message', err)));

export const post = (path, params = {}) => axios.post(`${server}/${path}`, params)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(_.get(err, 'response.data.message', err)));

export const postFile = (path, formData = {}) => axios.post(`${server}/${path}`, formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  onUploadProgress: () => {
  },
})
  .then((res) => {
    if (typeof res.data === 'string') {
      throw Error(res.data);
    } else return res.data;
  });

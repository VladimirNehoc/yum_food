import axios from 'axios';

const server = 'http://localhost:3333/';

const api = {
  get: (path, params = {}) => axios.get(`${server}${path}`, { params }).then(({ data }) => data),

  post: (path, params = {}) => axios.post(`${server}${path}`, params).then(({ data }) => data),

  postFile: (path, formData = {}) => axios.post(`${server}${path}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then((res) => {
    if (typeof res.data === 'string') {
      throw Error(res.data);
    } else return res.data;
  }),
};

export default api;

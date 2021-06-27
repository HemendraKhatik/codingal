import axios from 'axios';

export const api = (method, data, url) => {

  return new Promise((resolve) => {
    axios({
      method,
      url,
      data,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        resolve(err);
      });
  });
};

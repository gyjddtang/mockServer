import axios from 'axios';
import { remoteUrl } from './remote';

function xAxios(options) {
  const opts = {...options};

  opts.url = remoteUrl + opts.url;
  opts.headers = {
    'Content-Type': 'application/json',
    ...opts.headers
  };
  opts.method = opts.method || 'GET';
  opts.data = opts.method == 'GET' || opts.method == 'DELETE' ? null : JSON.stringify(opts.data);

  return new Promise((resolve, reject) => {
    axios(opts)
    .then(respone => {
      if(respone.data.succeed) {
        resolve(respone.data);
      } else {
        reject(respone.data);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  });
}

export default xAxios;

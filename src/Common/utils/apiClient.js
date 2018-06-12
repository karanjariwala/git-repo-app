import qs from 'qs';
import axios from 'axios';



/*
  - apiClient is wrpper over axios to handle common api stuff.
  - qs is just a utility to create a query string out of params.
  - Here we can handle common errors  do common config etc.
*/

const TIMEOUT = 600000;
function apiClient(
  url = '',
  httpMethod = 'get',
  params = {},
  data = {},
  headers = {},
  cancelRequestToken = '',
  baseURL,
) {
  return axios({
    url,
    baseURL: baseURL ? baseURL :'https://api.github.com/',  // Since this is github api client app api.github.com made default.
    timeout: TIMEOUT,
    method: httpMethod,
    data,
    headers,
    params,
    cancelToken: cancelRequestToken,
    paramsSerializer() {
      return qs.stringify(params, { arrayFormat: 'repeat' });
    },
  }).catch(error => {
    if (axios.isCancel(error)) {
      throw new Error('Request cancelled in axios due to redundancy');
    } else if (!error.response) {
      throw new Error('Network Error');
    } else {
      const errorEvent = new CustomEvent('apiError', {
        detail: error.response.data,
      });
      window.dispatchEvent(errorEvent);
      throw error;
    }
  });
}

export default apiClient;

import qs from 'qs';
import axios from 'axios';



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
    baseURL: baseURL ? baseURL :'https://api.github.com/',
    timeout: TIMEOUT,
    method: httpMethod,
    data,
    headers,
    params,
    cancelToken: cancelRequestToken,
    paramsSerializer(param) {
      return qs.stringify(param, { arrayFormat: 'repeat' });
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

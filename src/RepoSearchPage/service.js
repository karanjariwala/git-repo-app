import apiClient from '../Common/utils/apiClient';

const endpoints = {
  searchRepository: '/search/repositories',
};


export const getRepositories=(params)=>apiClient(endpoints.searchRepository,'get', params);
import apiClient from '../Common/utils/apiClient';

const endpoints = {
  getContributors: (full_name)=> `repos/${full_name}/contributors`,
};


export const getContributors=(params, full_name)=>apiClient(endpoints.getContributors(full_name),'get', params);
/*
* Action types
* Prefix with REPO_SEARCH_PAGE/ to avoid type clashing with other action types
*/

import { getRepositories } from './service';

export const ActionTypes = {
    INPUT_CHANGE: 'REPO_SEARCH_PAGE/INPUT_CHANGE',
    FETCH_REPOSITORIES:'REPO_SEARCH_PAGE/FETCH_REPOSITORIES',
    FETCH_REPOSITORIES_SUCCESS:'REPO_SEARCH_PAGE/FETCH_REPOSITORIES_SUCCESS',
    FETCH_REPOSITORIES_FAILURE:'REPO_SEARCH_PAGE/FETCH_REPOSITORIES_FAILURE',
};

/*
* Actions
*/
export const Actions = {
 onInputChange: (value) => ({type: ActionTypes.INPUT_CHANGE, value }),
 fetchRepositories: () => ({ type:ActionTypes.FETCH_REPOSITORIES }),
 fetchRepositoriesSucess: (data) => ({ type: ActionTypes.FETCH_REPOSITORIES_SUCCESS, data }),
 fetchRepositoriesFailure: (error) => ({ type: ActionTypes.FETCH_REPOSITORIES_FAILURE, error })
};

/* 
* Actioncreators
*/

export const ActionCreators = {
 fetchRepositories: () => (dispatch, getState) => {
   dispatch(Actions.fetchRepositories());
   const { repository } = getState();
   const params={
    q:repository.searchValue,
    in:'name',
    sort:'stars',
    order:'desc'
   }
   getRepositories(params)
     .then(data => dispatch(Actions.fetchRepositoriesSucess(data)))
     .catch(error => dispatch(Actions.fetchRepositoriesFailure(error)));
 },
};
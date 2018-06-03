/*
* Action types
* Prefix with REPO_SEARCH_PAGE/ to avoid type clashing with other action types
*/

export const ActionTypes = {
    INPUT_CHANGE: 'REPO_SEARCH_PAGE/INPUT_CHANGE',
    FETCH_REPOSITORIES:'REPO_SEARCH_PAGE/FETCH_REPOSITORIES',
    FETCH_REPOSITORIES_SUCCESS:'REPO_SEARCH_PAGE/FETCH_REPOSITORIES_SUCCESS',
    FETCH_REPOSITORIES_FAILURE:'REPO_SEARCH_PAGE/FETCH_REPOSITORIES_FAILURE',
    NAVIGATE_TO_CONTRIBUTORS_PAGE: 'REPO_SEARCH/NAVIGATE_TO_CONTRIBUTORS_PAGE',
};

/*
* Actions
*/
export const Actions = {
    onInputChange: (value) => ({type: ActionTypes.INPUT_CHANGE, value }),
    fetchRepositories: () => ({ type:ActionTypes.FETCH_REPOSITORIES }),
    fetchRepositoriesSucess: (data) => ({ type: ActionTypes.FETCH_REPOSITORIES_SUCCESS, data }),
    fetchRepositoriesFailure: () => ({ type: ActionTypes.FETCH_REPOSITORIES_FAILURE }),
    navigateToContributorsPage: (full_name) => ({ type: ActionTypes.NAVIGATE_TO_CONTRIBUTORS_PAGE, full_name})
};



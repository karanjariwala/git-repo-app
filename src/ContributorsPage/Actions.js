/*
* Action types
* Prefix with CONTRIBUTORS_PAGE/ to avoid type clashing with other action types
*/


export const ActionTypes = {
    FETCH_CONTRIBUTORS:'CONTRIBUTOR_PAGE/FETCH_CONTRIBUTORS',
    FETCH_CONTRIBUTORS_SUCCESS:'CONTRIBUTOR_PAGE/FETCH_CONTRIBUTORS_SUCCESS',
    FETCH_CONTRIBUTORS_FAILURE:'CONTRIBUTOR_PAGE/FETCH_CONTRIBUTORS_FAILURE',
    SHOW_MORE: 'CONTRIBUTOR_PAGE/SHOW_MORE',
};

/*
* Actions
*/
export const Actions = {
    fetchContributors: (accountName, repositoryName) => ({ type:ActionTypes.FETCH_CONTRIBUTORS, accountName, repositoryName }),
    fetchContributorsSucess: (data) => ({ type: ActionTypes.FETCH_CONTRIBUTORS_SUCCESS, data }),
    fetchContributorsFailure: (error) => ({ type: ActionTypes.FETCH_CONTRIBUTORS_FAILURE, error }),
    showMore: () => ({ type:ActionTypes.SHOW_MORE })
};



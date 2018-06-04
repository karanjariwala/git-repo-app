/*
* Action types
* Prefix with CONTRIBUTORS_PAGE/ to avoid type clashing with other action types
*/


export const ActionTypes = {
    FETCH_CONTRIBUTORS_PAGE: 'CONTRIBUTOR_PAGE/FETCH_CONTRIBUTORS_PAGE',
    FETCH_CONTRIBUTORS_PAGE_SUCCESS:'CONTRIBUTOR_PAGE/FETCH_CONTRIBUTORS_PAGE_SUCCESS',
    FETCH_CONTRIBUTORS_PAGE_FAILURE:'CONTRIBUTOR_PAGE/FETCH_CONTRIBUTORS_PAGE_FAILURE',
};

/*
* Actions
*/
export const Actions = {
    fetchContributorsPage: (accountName, repositoryName, firstLoad) => ({ type:ActionTypes.FETCH_CONTRIBUTORS_PAGE, accountName, repositoryName , firstLoad}),
    fetchContributorsPageSucess: (data, isLastPage) => ({ type: ActionTypes.FETCH_CONTRIBUTORS_PAGE_SUCCESS, data, isLastPage }),
    fetchContributorsPageFailure: () => ({ type: ActionTypes.FETCH_CONTRIBUTORS_PAGE_FAILURE }),
};



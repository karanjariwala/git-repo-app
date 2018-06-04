import { createSelector } from 'reselect';
/*
 - Biggest win of using selectors is it helps merge `Props`, better the interface of the `Component`
 - Helps you avoid making computations in `render()`. 
 - Since however all `mapStateToProps` compute every time any `state` updates, 
 - We need to memoise our `selectors` to avaoid un-ncessary computations at each state update.
 - Hence, using `reselect` here to create memoised selectors.
 - More usefull in larger application.
 */


const getContributorIds = state => state.contributors.contributorsData.result;
const getShowLength = state => state.contributors.contributorsData.showLength;


export const contributorIdsSelector = createSelector(
    getContributorIds,
    getShowLength,
    (contributorIds, showLength) => contributorIds && contributorIds.length ? contributorIds.slice(0,showLength) : []
  )


export const displayButtonSelector = createSelector(
    getContributorIds,
    getShowLength,
    (contributorIds, showLength) => contributorIds ? contributorIds.length > showLength :false
  )
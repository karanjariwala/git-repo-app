import { createSelector } from 'reselect';

/*
 - Not useful in this application since there is no computation happening in render.
 - Biggest win of using selectors is it helps merge `Props`, betters the interface of the `Component`
 - Helps you avoid making computations in `render()`. 
 - Since however all `mapStateToProps` compute every time any `state` updates, 
 - We need to memoise our `selectors` to avoid un-ncessary computations at each state update.
 - Hence, using `reselect` is big win in performance which scaling apps.
 - More usefull in larger application.
 */


const getContributorIds = state => state.contributors.contributorsData.result;


export const contributorIdsSelector = createSelector(
    getContributorIds,
    (contributorIds) => contributorIds && contributorIds.length ? contributorIds : []
  )



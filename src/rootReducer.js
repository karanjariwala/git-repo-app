import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import repositorySearchPage from './RepoSearchPage/reducer';
import contributorSearchPage from './ContributorsPage/reducer';

// Calls all reducers and combines there out-put into one object.

export default combineReducers({
  routing: routerReducer,
  repository:repositorySearchPage, 
  contributors:contributorSearchPage,
});
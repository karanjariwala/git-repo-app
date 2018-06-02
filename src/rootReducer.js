import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import repositorySearchPage from './RepoSearchPage/reducer';

export default combineReducers({
  routing: routerReducer,
  repository:repositorySearchPage, 
});
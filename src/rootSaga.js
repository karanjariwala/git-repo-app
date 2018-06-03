import { all } from 'redux-saga/effects';
import repositorySaga  from './RepoSearchPage/saga';
import  contributorsSaga from './ContributorsPage/saga';

// Just like root reducer this is root saga 
// When root saga executes it starts all the sagas

export default function* rootSaga() {
    yield all([
        repositorySaga(),
        contributorsSaga(),    
    ])
  }







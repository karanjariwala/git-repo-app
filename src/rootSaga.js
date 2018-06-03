import { takeEvery, all } from 'redux-saga/effects';
import repositorySaga  from './RepoSearchPage/saga';
import  contributorsSaga from './ContributorsPage/saga';

export default function* rootSaga() {
    yield all([
        repositorySaga(),
        contributorsSaga(),    
    ])
  }







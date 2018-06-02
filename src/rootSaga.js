import { takeEvery, all } from 'redux-saga/effects';
import repositorySaga  from './RepoSearchPage/saga';


export default function* rootSaga() {
    yield all([
        repositorySaga(),    
    ])
  }







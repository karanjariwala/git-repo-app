import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import * as Api from './service';
import { ActionTypes, Actions } from './Actions'; 

// worker Saga: will be fired on FETCH_REPOSITORIES actions
function* fetchRepositories(action) {
   try {
    const  q = yield select(state=> state.repository.searchValue)
    const params={
        q,
        in:'name',
        sort:'stars',
        order:'desc'
    }
      const { data } = yield call(Api.getRepositories, params );
      yield put(Actions.fetchRepositoriesSucess(data));
   } catch (error) {
      yield put(Actions.fetchRepositoriesFailure(error));
   }
}



/*
  takeLatest.

  Does not allow concurrent fetches of user. If "FETCH_REPOSITORIES" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* repositorySaga() {
  yield takeLatest( ActionTypes.FETCH_REPOSITORIES, fetchRepositories);
}

export default repositorySaga;
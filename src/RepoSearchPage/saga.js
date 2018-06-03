import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import * as Api from './service';
import { ActionTypes, Actions } from './Actions'; 
import { normalizedDataRepositories } from '../Common/utils/normalize'
import { push } from 'react-router-redux'


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
      const { entities, result } = normalizedDataRepositories(data.items.slice(0,6));
      yield put(Actions.fetchRepositoriesSucess({ entities: entities.repositories , result }));
   } catch (error) {
      yield put(Actions.fetchRepositoriesFailure(error));
   }
}

function* onNavigate(action){
  const { full_name } = action;
  yield put(push(`${full_name}/contributors`))
}


/*
  takeLatest.

  Does not allow concurrent fetches of user. If "FETCH_REPOSITORIES" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* repositorySaga() {
  yield takeLatest( ActionTypes.FETCH_REPOSITORIES, fetchRepositories);
  yield takeLatest( ActionTypes.NAVIGATE_TO_CONTRIBUTORS_PAGE, onNavigate)
}

export default repositorySaga;
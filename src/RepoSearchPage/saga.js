import { call, put, takeLatest, select } from 'redux-saga/effects'
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
      const { data } = yield call(Api.getRepositories, params );  //api call 
      const { entities, result } = normalizedDataRepositories(data.items.slice(0,6)); // triming and normalizing data
      yield put(Actions.fetchRepositoriesSucess({ entities: entities.repositories , result })); // action dispatch to save
   } catch (error) {
      const { response } = error;
      console.log(response);
      yield put(Actions.fetchRepositoriesFailure(JSON.stringify(response)));
   }
}

function* onNavigate(action){
  const { full_name } = action;
  yield put(push(`${full_name}/contributors`)) // router-redux action to navigate 
}


/*
  takeLatest.

  Does not allow concurrent fetches. If "FETCH_REPOSITORIES" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* repositorySaga() {
  yield takeLatest( ActionTypes.FETCH_REPOSITORIES, fetchRepositories);
  yield takeLatest( ActionTypes.NAVIGATE_TO_CONTRIBUTORS_PAGE, onNavigate)
}

export default repositorySaga;
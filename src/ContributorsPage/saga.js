import { call, put, takeLatest } from 'redux-saga/effects'
import { ActionTypes, Actions } from './Actions'; 
import { normalizedDataContributors } from '../Common/utils/normalize'
import * as Api from './service';

// worker Saga: will be fired on FETCH_REPOSITORIES actions
function* fetchContributors(action) {
    const { accountName, repositoryName } = action;
    yield console.log(accountName, repositoryName)
   try {
      const { data } = yield call(Api.getContributors , {} , `${accountName}/${repositoryName}`); // api call
      const { entities, result } = normalizedDataContributors(data); // normalizing array of Objects 
      yield put(Actions.fetchContributorsSucess({ entities: entities.contributors , result })); // save action with data 
   } catch (error) {
      yield put(Actions.fetchContributorsFailure(error));
   }
}

/*
  takeLatest.
  Does not allow concurrent fetches. If "FETCH_REPOSITORIES" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* contributorsSaga() {
  yield takeLatest( ActionTypes.FETCH_CONTRIBUTORS, fetchContributors);
}

export default contributorsSaga;
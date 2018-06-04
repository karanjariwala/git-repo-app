import { call, put, takeLatest, select } from 'redux-saga/effects';
import { ActionTypes, Actions } from './Actions'; 
import { normalizedDataContributors } from '../Common/utils/normalize'
import * as Api from './service';
import { findLastPage } from '../Common/utils/ContributorPageUtils';

const PAGE_SIZE = 5;
const INITIAL_LOAD_PAGE_SIZE = PAGE_SIZE * 2;

// worker Saga: will be fired on FETCH actions
function* fetchContributorsPage(action){
  const { accountName, repositoryName , firstLoad } = action;
  try {

    const contributorIds =  yield select(state => state.contributors.contributorsData.result);
    const page_num = parseInt(contributorIds.length / PAGE_SIZE, 10) + 1;  // calculating page number last fetched 
    const  params = firstLoad ? { page: 1, per_page: INITIAL_LOAD_PAGE_SIZE } : { page: page_num , per_page: PAGE_SIZE };
    const response = yield call(Api.getContributors , params , `${accountName}/${repositoryName}`); // api call

    if(response.data){
      const { entities, result } = normalizedDataContributors(response.data); // normalizing array of Objects 
      const isLastPage= findLastPage(response.headers,page_num) === page_num;
      yield put(Actions.fetchContributorsPageSucess({ entities: entities.contributors, result }, isLastPage )); // save action with data 
    }
    console.log(findLastPage(response.headers, page_num), response ,page_num)

  } catch (error) {
      const { response } = error;
      console.log(response);
      yield put(Actions.fetchContributorsPageFailure(JSON.stringify(response)));
 }
}


/*
  takeLatest.
  Does not allow concurrent fetches. If "FETCH_CONTRIBUTORS_PAGE" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* contributorsSaga() {
  yield takeLatest( ActionTypes.FETCH_CONTRIBUTORS_PAGE, fetchContributorsPage);
}

export default contributorsSaga;
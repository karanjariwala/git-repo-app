import { ActionTypes } from './Actions'

/* 
  FETCH_CONTRIBUTORS_PAGE_SUCCESS CASE:
    - [... set([...values])] will create a new array gaurentted to have unique values at all time.
*/  


const emptyContributorsData={
  entities:{},
  result:[],
}

const initialState = {
    loading:false,
    isLastPage:false,
    contributorsData: Object.assign({}, emptyContributorsData),
  };
  
const contributorSearchPage = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.FETCH_CONTRIBUTORS_PAGE: {
        const { firstLoad }= action;
        if(firstLoad){
          return Object.assign({}, state, { ...initialState,   loading: true  });
        }
        return Object.assign({}, state, {  loading: true  });
      }
        case ActionTypes.FETCH_CONTRIBUTORS_PAGE_SUCCESS:
        return Object.assign({}, state, { 
          contributorsData: { 
            entities: Object.assign({}, state.contributorsData.entities, action.data.entities), 
            result:[... new Set([...state.contributorsData.result, ...action.data.result])],  
            isLastPage: action.isLastPage 
              }, 
          loading: false  
              }
            )
      case ActionTypes.FETCH_CONTRIBUTORS_PAGE_FAILURE:
        return Object.assign({}, state, { loading: false  })
      case ActionTypes.SHOW_MORE:
        return Object.assign({}, state, {contributorsData: { ...state.contributorsData, showLength: state.contributorsData.showLength + 5 }})
      default:
        return state;
      }
    }

export default contributorSearchPage

  
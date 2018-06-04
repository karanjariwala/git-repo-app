import { ActionTypes } from './Actions'

const initialState = {
    searchValue:'',
    loading:false,
    repositoryData: {},
  };
  
const repositorySearchPage = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.INPUT_CHANGE:
        return Object.assign({}, state, { searchValue: action.value, repositoryData: {}, error: {} });
      case ActionTypes.FETCH_REPOSITORIES: 
        return Object.assign({}, state, { loading: true });
      case ActionTypes.FETCH_REPOSITORIES_SUCCESS:
        return Object.assign({}, state, { repositoryData: action.data, loading: false  })
      case ActionTypes.FETCH_REPOSITORIES_FAILURE:
        return Object.assign({}, state, {  loading: false  })
      default:
        return state;
      }
    }

export default repositorySearchPage

  
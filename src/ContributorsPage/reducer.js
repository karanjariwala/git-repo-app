import { ActionTypes } from './Actions'

const initialState = {
    loading:'false',
    contributorsData: {},
    error: {},
  };
  
const contributorSearchPage = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.FETCH_CONTRIBUTORS: 
        return Object.assign({}, state, { loading: true });
      case ActionTypes.FETCH_CONTRIBUTORS_SUCCESS:
        return Object.assign({}, state, { contributorsData: {...action.data, showLength:10}, loading: false  })
      case ActionTypes.FETCH_CONTRIBUTORS_FAILURE:
        return Object.assign({}, state, { error: action.error, loading: false  })
      case ActionTypes.SHOW_MORE:
        return Object.assign({}, state, {contributorsData: { ...state.contributorsData, showLength: state.contributorsData.showLength + 5 }})
      default:
        return state;
      }
    }

export default contributorSearchPage

  
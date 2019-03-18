import * as actionTypes from '../actions/actionTypes';

const initialState = {
  results: []
};

const resultReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      }
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArr = [...state.results];
      // newArr.splice(id, 1);
      const updatedArr = state.results.filter(result => {
        return result.id !== action.resultElId
      })

      return {
        ...state,
        results: updatedArr
      }
    default:
      return state
  }
}

export default resultReducer;
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updatedArr = state.results.filter(result => result.id !== action.resultElId);
  return updateObject(state, { results: updatedArr });
}

const resultReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      // Transform Logic
      const res = action.result * 2;
      return updateObject(state, { results: state.results.concat({ id: new Date(), value: res }) });

    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArr = [...state.results];
      // newArr.splice(id, 1);

      // return {
      //   ...state,
      //   results: updatedArr
      // }
      return deleteResult(state, action);
    default:
      return state
  }
}

export default resultReducer;
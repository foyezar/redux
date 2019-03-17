import * as actionTypes from '../actions'

const initialState = {
  counter: 0,
  results: []
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      }
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
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
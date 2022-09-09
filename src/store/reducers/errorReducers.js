import * as actionTypes from "../actionTypes";

const initialState = {};
export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_ERRORS:
      return { ...action.payload };
    case actionTypes.CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}

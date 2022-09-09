import * as actionTypes from "../actionTypes";

const initialState = {};
export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_MESSAGE:
      return { ...action?.payload };
    case actionTypes.CLEAR_MESSAGE:
      return {};
    default:
      return state;
  }
}

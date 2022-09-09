import * as actionTypes from "../actionTypes";

const initialState = {
  lookUpValues: {},
};
export default function AuthReducers(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_LOOKUP_VALUES:
      return { ...state, lookUpValues: action.payload };
    default:
      return state;
  }
}

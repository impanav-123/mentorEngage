import * as actionTypes from "../../actionTypes";
import * as API from "../../../API/index";

export const getLookupValue = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const { data } = await API.getLookupValue();
    if (data) {
      sessionStorage.setItem("lookUpValue", JSON.stringify(data));
      dispatch({ type: actionTypes.GET_LOOKUP_VALUES, paylad: data });
      setLoading(false);
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

import { combineReducers } from "redux";
import checkoutReducer from "./checkoutReducer"

const allReducers = combineReducers({
  checkout: checkoutReducer
});

export default allReducers;

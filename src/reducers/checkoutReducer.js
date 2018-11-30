import actionTypes from "actions/ACTION_TYPES";
import { cloneDeep } from "lodash";
import {planData} from 'Helper'

let _designDefault = {
    currentCountry: 'VN',
    plan: planData[1],
    paymentMethod: ""
  },
  cloneState;

export default (state = _designDefault, action) => {
  switch (action.type) {
    case actionTypes.START_APP:
      cloneState = cloneDeep(state);
      cloneState = {
        ...cloneState,
        ...action.defaultProps
      };
      return cloneState;
    case actionTypes.CHOOSE_PLAN:
      cloneState = cloneDeep(state);
      cloneState = {
        ...cloneState,
        plan: action.planData
      };
      return cloneState;
    case actionTypes.CHOOSE_PAYMENT_METHOD:
      cloneState = cloneDeep(state);
      cloneState = {
        ...cloneState,
        paymentMethod: action.data
      };
      return cloneState;
    case actionTypes.TO_SUCCESS_PAGE:
      return {
        ...state,
        toSuccessPage: true
      };

    default:
      return state;
  }
};

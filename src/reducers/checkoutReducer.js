import actionTypes from "actions/ACTION_TYPES";
import { cloneDeep } from "lodash";
import {planData} from 'Helper'

let _designDefault = {
    selectedCountry: 'VN',
    plan: planData[1]
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

    default:
      return state;
  }
};

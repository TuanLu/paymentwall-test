import actionTypes from "actions/ACTION_TYPES";
import { cloneDeep } from "lodash";

let _designDefault = {

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
    case actionTypes.UPDATE_STATE_DATA:
      cloneState = cloneDeep(state);
      cloneState = {
        ...cloneState,
        ...action.updateData
      };
      return cloneState;

    default:
      return state;
  }
};

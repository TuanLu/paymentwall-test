import actionTypes from "./ACTION_TYPES";

export const startApp = defaultProps => ({
  type: actionTypes.START_APP,
  defaultProps
});

/**
 *
 * @param {object} updateData
 */
export const updateStateData = updateData => ({
  type: actionTypes.UPDATE_STATE_DATA,
  updateData
});
/**
 *
 * @param {object} plan
 */
export const choosePlan = planData => ({
  type: actionTypes.CHOOSE_PLAN,
  planData
});
/**
 *
 * @param {object} paymentMethod
 */
export const choosePaymentMethod = data => ({
  type: actionTypes.CHOOSE_PAYMENT_METHOD,
  data
});
export const toSuccessPage = () => ({
  type: actionTypes.TO_SUCCESS_PAGE,
});
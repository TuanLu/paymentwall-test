import React from "react"
import { Route, Switch } from "react-router-dom"
import CheckoutPage from "./CheckoutPage"
import SuccessPage from "./SuccessPage"

const router = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={CheckoutPage} />
        <Route path="/success" component={SuccessPage} />
      </Switch>
    </React.Fragment>
  );
};

export default router;

import React from "react"
import { Route, Switch } from "react-router-dom"
import CheckoutPage from "./CheckoutPage"

const router = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={CheckoutPage} />
      </Switch>
    </React.Fragment>
  );
};

export default router;

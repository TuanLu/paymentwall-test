import React, {Component} from 'react'
import { Redirect } from "react-router-dom"
import Header from "./CheckoutPage/Header"
import AmountForm from "./CheckoutPage/AmountForm"
import PaymentForm from "./CheckoutPage/PaymentForm"
import {connect} from "react-redux"
import "./CheckoutPage.css"

class Checkout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {toSuccessPage} = this.props;
    if(toSuccessPage) {
      return <Redirect to="/success" />
    }
    return (
      <div className="main">        
        <Header/>   
        <AmountForm/>
        <PaymentForm/>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    toSuccessPage: state.checkout.toSuccessPage
  }
})(Checkout)
import React, {Component} from 'react'
import { Redirect } from "react-router-dom"
import Header from "./CheckoutPage/Header"
import AmountForm from "./CheckoutPage/AmountForm"
import PaymentForm from "./CheckoutPage/PaymentForm"
import "./CheckoutPage.css"

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toSuccessPage: false
    }
  }
  render() {
    if(this.state.toSuccessPage) {
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

export default Checkout
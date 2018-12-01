import React, {Component} from 'react'
import Header from "./CheckoutPage/Header"
import AmountForm from "./CheckoutPage/AmountForm"
import PaymentForm from "./CheckoutPage/PaymentForm"
import SuccessBox from "./CheckoutPage/SuccessBox"
import "./CheckoutPage.css"

class Checkout extends Component {
  render() {
    return (
      <div className="main">        
        <Header/>   
        <AmountForm/>
        <PaymentForm/>
        <SuccessBox/>
      </div>
    )
  }
}

export default Checkout
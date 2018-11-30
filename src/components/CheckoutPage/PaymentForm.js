import React, {Component} from 'react'
import CardForm from './PaymentForm/CardForm'
import CountryAndPayment from './PaymentForm/CountryAndPayment'
import { Layout } from 'antd'
import ContentHeader from './../common/ContentHeader'
import {connect} from 'react-redux'
const { Content } = Layout

class PaymentForm extends Component {
  render() {
    let {paymentMethod} = this.props;
    return (
      <div>
        <Layout>
          <Content style={{ padding: '0 50px', marginTop: 0 }}>
            <ContentHeader title="Payment Method"/>
            <CountryAndPayment/>
          </Content>
          {paymentMethod !== "" ? 
          <Content style={{ padding: '0 50px', marginTop: 0 }}>
            <ContentHeader title="Credit Card"/>
            <CardForm/>
          </Content>
          : null}
          
        </Layout>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    paymentMethod: state.checkout.paymentMethod
  }
})(PaymentForm)
import React, {Component} from 'react'
import CardForm from './PaymentForm/CardForm'
import CountryAndPayment from './PaymentForm/CountryAndPayment'
import { Layout, Card } from 'antd'
import {connect} from 'react-redux'
const { Content } = Layout

class PaymentForm extends Component {
  render() {
    let {paymentMethod} = this.props;
    return (
      <div>
        <Layout>
          <Content style={{ padding: '0 50px', marginTop: 20, marginBottom: 20 }}>
            <Card 
              title="Choose Payment Method">
              <CountryAndPayment/>
            </Card>
            
          </Content>
          {paymentMethod !== "" ? 
          <Content style={{ padding: '0 50px', marginBottom: 20 }}>
            <Card title="Credit Card">
              <CardForm/>
            </Card>
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
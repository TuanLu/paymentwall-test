import React, {Component} from 'react'
import CardForm from './PaymentForm/CardForm'
import CountryAndPayment from './PaymentForm/CountryAndPayment'
import { Layout, Card, Drawer} from 'antd'
import {connect} from 'react-redux'
import {choosePaymentMethod} from 'actions'
const { Content } = Layout

class PaymentForm extends Component {
  render() {
    let {paymentMethod, dispatch} = this.props;
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
          // <Content style={{ padding: '0 50px', marginBottom: 20 }}>
          //   <Card title="Credit Card">
          //     <CardForm/>
          //   </Card>
          // </Content>
          <Drawer
            className="paymentwall-card-form"
            title="Credit Card"
            placement="right"
            closable={true}
            onClose={() => {
              dispatch(choosePaymentMethod(""));
            }}
            visible={true}
          >
            <CardForm/>
          </Drawer>
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
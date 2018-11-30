import React, {Component} from 'react'
import CardForm from './PaymentForm/CardForm'
import Country from './PaymentForm/Country'
import { Layout } from 'antd'
import ContentHeader from './../common/ContentHeader'
const { Content } = Layout

class PaymentForm extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Content style={{ padding: '0 50px', marginTop: 0 }}>
            <ContentHeader title="Payment Method"/>
            <Country/>
          </Content>
          <Content style={{ padding: '0 50px', marginTop: 0 }}>
            <ContentHeader title="Credit Card"/>
            <CardForm/>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default PaymentForm
import React, {Component} from 'react'
import { Card, List } from 'antd'
import {connect} from 'react-redux'
import {choosePaymentMethod} from 'actions'
import "./PaymentMethods.css"

class PaymentMethods extends Component {
  render() {
    let {dispatch, paymentMethod} = this.props;    
    return (
      <div>
        <List
          grid={{ gutter: 8, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 3 }}
          dataSource={this.props.paymentMethods}
          renderItem={item => (
            <List.Item onClick={() => {
              dispatch(choosePaymentMethod(item.name));
            }}>
              <Card
                type="inner"
                className={paymentMethod === item.name ? "selected-payment card-payment" : "card-payment"}>
                  <div className="method-item" style={{
                    backgroundImage: `url('${item.img_url}')`
                  }}>
                    {/* {item.name} */}
                  </div>
                {/* <img style={{
                  //maxWidth: 100,
                  //maxHeight: 100
                }} src={item.img_url}/> */}
              </Card>
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default connect((state) => {
  return {
    paymentMethod: state.checkout.paymentMethod
  }
})(PaymentMethods)
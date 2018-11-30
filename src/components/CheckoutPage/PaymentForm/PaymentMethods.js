import React, {Component} from 'react'
import { Card, List, Radio } from 'antd'
import "./PaymentMethods.css"

class PaymentMethods extends Component {
  state = {
    selected: {}
  }
  render() {
    let selectedMethod = this.state.selected.name;
    return (
      <div>
        <List
          grid={{ gutter: 8, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 3 }}
          dataSource={this.props.paymentMethods}
          renderItem={item => (
            <List.Item onClick={() => {
              this.setState({selected: item});
            }}>
              <Card
                className={selectedMethod === item.name ? "selected-payment" : ""}>
                <img src={item.img_url}/>
              </Card>
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default PaymentMethods
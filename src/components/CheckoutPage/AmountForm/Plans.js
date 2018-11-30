import React, {Component} from 'react'
import { Card, List } from 'antd'
import "./Plans.css"

const data = [
  {
    title: 'Basic',
    price: 4.49
  },
  {
    title: 'Regular',
    price: 9.99
  },
  {
    title: 'Premium',
    price: 19.99
  },
  {
    title: 'Enterprise',
    price: 29.99
  }
];

class Plans extends Component {
  state = {
    selected: data[1]
  }
  render() {
    let selectedPlan = this.state.selected.title;
    return (
      <div>
        <List
          grid={{ gutter: 8, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 3 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card
                title={item.title}
                className={selectedPlan === item.title ? "selected-plan" : ""}>
                <span style={{
                  fontSize: 30
                }}>${item.price}</span>/month
              </Card>
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default Plans
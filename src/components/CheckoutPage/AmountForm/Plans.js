import React, {Component} from 'react'
import { Card, List } from 'antd'
import {connect} from 'react-redux'
import {choosePlan} from 'actions'
import {planData} from 'Helper'
import "./Plans.css"

class Plans extends Component {
  render() {
    let {dispatch, checkout: {plan}} = this.props;
    let selectedPlan = plan.title;
    return (
      <div>
        <List
          grid={{ gutter: 8, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }}
          dataSource={planData}
          renderItem={item => (
            <List.Item onClick={() => {
              dispatch(choosePlan(item))
            }}>
              <Card
                type="inner"
                title={item.title}
                className={`plan-item ${selectedPlan === item.title ? "selected-plan" : ""} ${item.css_class}`}>
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

export default connect((state) => {
  return {
    checkout: state.checkout
  }
})(Plans)
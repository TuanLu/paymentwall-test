import React, {Component} from 'react'
import {Layout, Icon} from 'antd'
import {Link} from 'react-router-dom'

const {Content} = Layout;

const contentStyle = {
  margin: '50px auto',
  textAlign: 'center',
  height: '100vh'
};

class Success extends Component {
  render() {
    return (
      <Layout>
        <Content style={contentStyle}>
          <Icon style={{
            fontSize: 50
          }} type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
          <h1>Payment Successful</h1>
          <h4>Thank you for your purchase!</h4>
          <Link to={"/"}>Back To Website</Link>
        </Content>
      </Layout>
      
    )
  }
}

export default Success
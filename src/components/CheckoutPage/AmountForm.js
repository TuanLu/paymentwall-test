import React, {Component} from 'react'
import { Layout } from 'antd'
import ContentHeader from './../common/ContentHeader'
import Plans from './AmountForm/Plans'
const { Content } = Layout

class AmountForm extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Content style={{ padding: '0 50px', marginTop: 50 }}>
            <ContentHeader title="Choose Your Plan"/>
            <Plans/>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default AmountForm
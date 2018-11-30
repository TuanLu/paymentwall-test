import React, {Component} from 'react'
import { Layout, Card } from 'antd'
import Plans from './AmountForm/Plans'
const { Content } = Layout

class AmountForm extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Content style={{ padding: '0 50px', marginTop: 20 }}>
            <Card title="Choose Your Plan">
              <Plans/>
            </Card>
          </Content>
        </Layout>
        
      </div>
    )
  }
}

export default AmountForm
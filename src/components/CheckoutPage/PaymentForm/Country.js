import React, {Component} from 'react'
import {countryListOptions, Paymentwall_API_URL} from 'Helper'
import {Select, message, Spin, Row, Col} from 'antd'
import PaymentMethods from './PaymentMethods'


const _countryListOptions = countryListOptions();

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};


class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCountry: 'VN',
      loading: false,
      paymentMethods: []
    }
    this.changeCountry = this.changeCountry.bind(this);
  }
  async getPaymentMethodsByCountry(code) {
    try {
      this.setState({loading: true});
      let request = await fetch(Paymentwall_API_URL + `&country_code=${code}`);
      let rsData = await request.json();
      if(rsData.length) {
        this.setState({paymentMethods: rsData, loading: false});
      } else {
        this.setState({loading: false});
      }
    } catch (error) {
      message.error('Something went wrong!');
      this.setState({loading: false});
    }
  }
  changeCountry(value) {
    this.getPaymentMethodsByCountry(value);    
  }
  componentDidMount() {
    this.getPaymentMethodsByCountry(this.state.currentCountry);
  }
  render() {
    return (
      <div>
        <Row>
          <Col xs={24} sm={24} md={8} lg={6} xl={6} style={{
            margin: '5px 0'
          }}>
            <h4>Select Country</h4>
            <Select
              loading={this.state.loading}
              onChange={this.changeCountry}
              defaultValue={this.state.currentCountry}
              style={{ width: 200 }}
              placeholder="Select a country"
            >
              {_countryListOptions.map((option, index) => {
                return <Select.Option 
                        value={option.value} 
                        key={option.value}>
                        {option.text}
                      </Select.Option>
              })}
            </Select>
          </Col>
          <Col xs={24} sm={24} md={16} lg={18} xl={18}>
            <Spin spinning={this.state.loading}>
              <PaymentMethods paymentMethods={this.state.paymentMethods}/>
            </Spin>
          </Col>
        </Row>
       
       
      </div>
    )
  }
}

export default Country
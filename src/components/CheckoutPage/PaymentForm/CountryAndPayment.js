import React, {Component} from 'react'
import {countryListOptions, Paymentwall_API_URL} from 'Helper'
import {Select, message, Spin, Row, Col} from 'antd'
import PaymentMethods from './PaymentMethods'
import {connect} from 'react-redux'
import {choosePaymentMethod} from 'actions'

const _countryListOptions = countryListOptions();

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
      let rqUrl = !code ? Paymentwall_API_URL : Paymentwall_API_URL + `&country_code=${code}`;
      let request = await fetch(rqUrl);
      let rsData = await request.json();
      if(rsData.length) {
        this.setState({paymentMethods: rsData, loading: false});
        this.props.dispatch(choosePaymentMethod(""));
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
        <Row gutter={8}>
          <Col className="country-card" xs={24} sm={24} md={8} lg={6} xl={6}>
            <h4>Select Country</h4>
            <Select
              loading={this.state.loading}
              onChange={this.changeCountry}
              defaultValue={this.state.currentCountry}
              style={{ width: '100%' }}
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

export default connect((state) => {
  return {
    paymentMethod: state.checkout.paymentMethod
  }
})(Country)
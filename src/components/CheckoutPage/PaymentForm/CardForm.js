import React from 'react'
import { Form, Input, Button, DatePicker } from 'antd';
import {valid_credit_card} from 'Helper'
import moment from 'moment'
import {connect} from 'react-redux'
import {updateStateData} from 'actions'

const FormItem = Form.Item;
const { MonthPicker } = DatePicker;

class CardForm extends React.Component {
  state = {
    loading: false,
  };
  checkout() {
    this.setState({loading: true});
    let {dispatch} = this.props;
    this.tempTimeout = setTimeout(() => {
      this.setState({loading: false});
      //Dispatch to show success message
      dispatch(updateStateData({
        paymentMethod: "",
        showSuccess: true
      }))
    }, 2000);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        //Connect to Payment API
        this.checkout();
        console.log('Received values of form: ', values);
      }
    });
  }

  validateCardNumber = (rule, value, callback) => {
    const form = this.props.form;
    if (!valid_credit_card(value)) {
      callback('Card number is invalid!');
    } else {
      callback();
    }
  }
  disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }
  componentWillUnmount() {
    clearTimeout(this.tempTimeout);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    let {plan} = this.props;

    const formItemLayout = {
      // labelCol: {
      //   xs: { span: 24 },
      //   sm: { span: 8 },
      // },
      // wrapperCol: {
      //   xs: { span: 24 },
      //   sm: { span: 16 },
      // },
    };
    const tailFormItemLayout = {
      // wrapperCol: {
      //   xs: {
      //     span: 24,
      //     offset: 8,
      //   },
      //   sm: {
      //     span: 16,
      //     offset: 8,
      //   },
      //   md: {
      //     span: 16,
      //     offset: 8,
      //   }
      // },
    };

    return (
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="Card holder name"
        >
          {getFieldDecorator('card_name', {
            rules: [{
              required: true, message: 'Please enter name!',
            },
            {
              type: "string", 
              pattern: /^[a-zA-Z ]+$/,
              message: 'Please enter character only!',
            }],
          })(
            <Input size="large" placeholder={"Enter your name"} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Card number"
        >
          {getFieldDecorator('card_number', {
            //trigger: ['onChange'],
            rules: [{
              required: true, message: 'Please enter card number!',
            },{
              validator: this.validateCardNumber,
            }],
          })(
            <Input size="large" placeholder={"Enter card number"} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="MonthPicker"
        >
          {getFieldDecorator('exp_date', {
            rules: [{
              required: true, message: 'Please select exp date!',
            }],
          })(
            <MonthPicker defaultPickerValue={moment('2019-01', 'YYYY-MM')} style={{width: '100%'}} size="large" disabledDate={this.disabledDate} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="CVV"
        >
          {getFieldDecorator('cvv', {
            rules: [{
              required: true, message: 'Please enter cvv number!',
            },
            {
              pattern: /^[0-9]{3,4}$/, 
              message: 'Please enter valid cvv number!',
            }],
          })(
            <Input placeholder="Enter CVV number" size="large" />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button 
            style={{marginTop: 10}}
            block 
            loading={this.state.loading} 
            size="large" type="primary" 
            htmlType="submit">{`Pay $${plan.price} USD`}</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedCardForm = Form.create()(CardForm);

export default connect((state) => {
  return {
    plan: state.checkout.plan
  }
})(WrappedCardForm)
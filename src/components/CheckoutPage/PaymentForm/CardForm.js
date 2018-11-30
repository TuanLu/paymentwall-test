import React from 'react'
import { Form, Input, Button, DatePicker } from 'antd';
import {valid_credit_card} from 'Helper'
import moment from 'moment'

const FormItem = Form.Item;
const { MonthPicker } = DatePicker;

class CardForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
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


  render() {
    const { getFieldDecorator } = this.props.form;

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
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 8,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit}>
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
            <Input placeholder={"Enter your name"} />
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
            <Input placeholder={"Enter card number"} />
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
            <MonthPicker disabledDate={this.disabledDate} />
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
            <Input />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Pay 5 USD</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedCardForm = Form.create()(CardForm);

export default WrappedCardForm
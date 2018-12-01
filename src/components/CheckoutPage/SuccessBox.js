import React, {Component} from 'react'
import { Icon, Button} from 'antd'
import {Modal} from "antd"
import {connect} from "react-redux"
import {showSuccessBox} from "actions"

class Success extends Component {
  closeModal() {
    let { dispatch} = this.props;
    dispatch(showSuccessBox(false));
  }
  render() {
    let {showSuccess} = this.props;
    return (
      <Modal
          //title="Basic Modal"
          onCancel={() => {
            this.closeModal();
          }}
          footer={null}
          visible={showSuccess}>
          <div style={{textAlign: 'center'}}>
            <Icon style={{
                fontSize: 45
              }} type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
              <h1 style={{margin: '5px 0'}}>Payment Successful</h1>
              <h4 style={{color: "#9E9E9E"}}>Thank you for your purchase!</h4>
              <Button type="primary" ghost onClick={() => this.closeModal()}>Continue Shopping!</Button>
          </div>
        </Modal>
      
    )
  }
}

export default connect((state) => {
  return {
    showSuccess: state.checkout.showSuccess
  }
})(Success)
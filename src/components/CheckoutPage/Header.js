import React, {Component} from 'react'

const headerStyle = {
  textAlign: 'center',
  fontSize: 30,
  fontFamily: 'monospace',
  textTransform: 'uppercase',
  fontWeight: 700,
  background: '#712e4a',
  color: '#fff'
};

class Header extends Component {
  render() {
    return (
      <div style={headerStyle}>Paymentwall Special Care Program</div>
    )
  }
}

export default Header
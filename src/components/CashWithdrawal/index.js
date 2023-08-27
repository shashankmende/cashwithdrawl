// Write your code here
import {Component} from 'react'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onClick50Button = () => {
    this.setState(prevState => ({amount: prevState.amount - 50}))
  }

  onClick100Button = () => {
    this.setState(prevState => ({amount: prevState.amount - 100}))
  }

  onClick200Button = () => {
    this.setState(prevState => ({amount: prevState.amount - 200}))
  }

  onClick500Button = () => {
    this.setState(prevState => ({amount: prevState.amount - 500}))
  }

  render() {
    const {amount} = this.state
    return (
      <div className="bg_container">
        <div className="inner-container">
          <div className="profile-container">
            <div className="profile-icon">
              <p>S</p>
            </div>
            <p className="profile-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div>
              <p className="initial-balance">{amount}</p>
              <p className="In-rupees">In Rupees</p>
            </div>
          </div>
          <p className="initial-balance">Withdraw</p>
          <p className="In-rupees">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-container">
            <div>
              <button
                type="button"
                className="button"
                onClick={this.onClick50Button}
              >
                50
              </button>
              <button
                type="button"
                className="button"
                onClick={this.onClick100Button}
              >
                100
              </button>
            </div>
            <div>
              <button
                type="button"
                className="button"
                onClick={this.onClick200Button}
              >
                {' '}
                200
              </button>
              <button
                type="button"
                className="button"
                onClick={this.onClick500Button}
              >
                500
              </button>
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

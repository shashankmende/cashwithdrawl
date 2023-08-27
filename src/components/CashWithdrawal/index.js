// Write your code here
import {Component} from 'react'
import DenominationItemComponent from '../DenominationItem/index'
import './index.css'

class CashWithdrawal extends Component {
  state = {denominationsList: this.props, amount: 2000}

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
    const {denominationsList, amount} = this.state
    console.log(' in render method', denominationsList.denominationsList)
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
            {denominationsList.denominationsList.map(eachItem => (
              <DenominationItemComponent
                each={eachItem}
                key={eachItem.id}
                onClick50Button={this.onClick50Button}
                onClick100Button={this.onClick100Button}
                onClick200Button={this.onClick200Button}
                onClick500Button={this.onClick500Button}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

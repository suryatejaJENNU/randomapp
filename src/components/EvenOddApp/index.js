import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {number: 0, text: 'Count is Even'}

  change = () => {
    const k = Math.floor(Math.random() * 101)
    if (k % 2 === 0) {
      this.setState(pre => ({number: k, text: 'Count is Even'}))
    } else {
      this.setState(pre => ({number: k, text: 'Count is Odd'}))
    }
  }

  render() {
    const {number, text} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="main-heading">Count {number}</h1>
          <p>{text}</p>
          <button type="button" className="button" onClick={this.change}>
            Increment
          </button>
          <p>*Increase Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

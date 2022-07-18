import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state

    const numberType = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="even-odd-container">
          <h1 className="heading">Count {count}</h1>
          <p className="num-type">Count is {numberType} </p>
          <button type="button" className="incr-btn" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

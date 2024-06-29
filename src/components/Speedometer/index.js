// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onClickAccelerateButton = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onClickApplyBreakButton = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="meter-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <div>
          <img
            className="meter-image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
        </div>
        <h1 className="speed-count">Speed is {count}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="buttton"
            className="button1"
            onClick={this.onClickAccelerateButton}
          >
            Accelerate
          </button>
          <button
            type="buttton"
            className="button2"
            onClick={this.onClickApplyBreakButton}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer

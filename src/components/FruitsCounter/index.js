// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  increment = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  decrement = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango} = this.state
    const {banana} = this.state
    return (
      <div className="container-one">
        <div className="container-two">
          <h1>
            Bob ate <span className="span">{mango} </span>mangoes
            <span className="span"> {banana} </span>bananas
          </h1>
          <div className="new-con">
            <div className="fruits-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="Mango"
              />
              <button onClick={this.increment} type="button" className="button">
                Eat Mango
              </button>
            </div>
            <div className="fruits-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="Banana"
              />
              <button onClick={this.decrement} type="button" className="button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

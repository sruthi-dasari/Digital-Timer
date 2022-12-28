import './index.css'
import {Component} from 'react'

class DigitalTimer extends Component {
  constructor() {
    state = {
      timerStarted: false,
    }
  }

    const playIcon =
      'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const pauseIcon =
      'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
    const startPauseImgUrl = timerStarted ? playIcon : pauseIcon

  render() {
    

    return (
      <div className="app-container">
        <h1 className="main-heading">Digital Timer</h1>
        <div className="app-img">
          <div className="main-timer">
            <h1 className="timer-text"></h1>
            <p className="start-pause-text"></p>
          </div>
        </div>
        <div className="start-pause-reset-container">
          <div className="start-pause-container">
            <img src={startPauseImgUrl} className="start-pause-icon" />
            <h1 className="start-pause-text">{}</h1>
          </div>
          <div className="reset-container">
            <img src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png" className="reset-icon" />
            <h1 className="reset-text">{}</h1>
          </div>
        </div>
        <div className="timer-limit-container">
          <p className="timer-limit-title"></p>
          <div className="timer-setting-container">
            <button className="minus-btn">-</button>
            <button className="time-btn">25</button>
            <button className="plus-btn">+</button>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer

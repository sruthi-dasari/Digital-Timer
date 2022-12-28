import './index.css'
import {Component} from 'react'

class DigitalTimer extends Component {
  state = {
    isTimerStarted: false,
    minutes: 25,
  }

  onClickMinus = () => {
    this.setState(prevState => ({
      minutes: prevState.minutes - 1,
    }))
  }

  onClickPlus = () => {
    this.setState(prevState => ({
      minutes: prevState.minutes + 1,
    }))
  }

  onClickStart = () => {}

  render() {
    const {isTimerStarted, minutes} = this.state

    const startPauseImgUrl = isTimerStarted
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

    const startPauseAltText = isTimerStarted ? 'pause icon' : 'play icon'

    const runningPausedText = isTimerStarted ? 'Running' : 'Paused'

    const startPauseText = isTimerStarted ? 'Pause' : 'Start'

    let authButton

    if (isTimerStarted) {
      authButton = (
        <div className="start-pause-container">
          <button
            className="startPauseBtn"
            type="button"
            onClick={this.onClickPause}
          >
            <img
              src={startPauseImgUrl}
              className="start-pause-icon"
              alt={startPauseAltText}
            />
          </button>
          <h1 className="start-pause-text">{startPauseText}</h1>
        </div>
      )
    } else {
      authButton = (
        <div className="start-pause-container">
          <button
            className="startPauseBtn"
            type="button"
            onClick={this.onClickStart}
          >
            <img
              src={startPauseImgUrl}
              className="start-pause-icon"
              alt={startPauseAltText}
            />
          </button>
          <h1 className="start-pause-text">{startPauseText}</h1>
        </div>
      )
    }

    const stringifiedMinutes = minutes > 9 ? minutes : '0' + minutes
    const stringifiedSeconds = seconds > 9 ? seconds : '0' + seconds

    return (
      <div className="app-container">
        <h1 className="main-heading">Digital Timer</h1>
        <div className="app-img-container">
          <div className="main-timer">
            <h1 className="timer-text">{minutes}</h1>
            <p className="running-paused-text">{runningPausedText}</p>
          </div>
        </div>
        <div className="start-pause-reset-container">
          {authButton}
          <div className="reset-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
              className="reset-icon"
              alt="reset icon"
            />
            <h1 className="reset-text">Reset</h1>
          </div>
        </div>
        <div className="timer-limit-container">
          <p className="timer-limit-title">Set Timer Limit</p>
          <div className="timer-setting-container">
            <button
              className="operator-btn"
              type="button"
              onClick={this.onClickMinus}
            >
              -
            </button>
            <button className="time-btn" type="button">
              {minutes}
            </button>
            <button
              className="operator-btn"
              type="button"
              onClick={this.onClickPlus}
            >
              +
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer

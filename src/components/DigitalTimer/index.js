import './index.css'
import {Component} from 'react'

const initialState = {
  isTimerStarted: false,
  timeLimitInMinutes: 25,
  timeElapsedInSeconds: 0,
}

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
    console.log('Constructor called')
  }

  componentWillUnmount() {
    this.clearTimerInterval()
    console.log('ComponentWillUnmount() called')
  }

  clearTimerInterval = () => clearInterval(this.intervalId)

  onClickMinus = () => {
    const {timeLimitInMinutes} = this.state

    if (timeLimitInMinutes > 1) {
      this.setState(prevState => ({
        timerLimitInMinutes: prevState.timerLimitInMinutes - 1,
      }))
    }
  }

  onClickPlus = () => {
    this.setState(prevState => ({
      timerLimitInMinutes: prevState.timeLimitInMinutes + 1,
    }))
  }

  renderTimerLimitController = () => {
    const {timeLimitInMinutes, timeElapsedInSeconds} = this.state
    const isButtonsDisabled = timeElapsedInSeconds > 0

    return (
      <div className="timer-limit-container">
        <p className="timer-limit-title">Set Timer Limit</p>
        <div className="timer-setting-container">
          <button
            className="operator-btn"
            type="button"
            onClick={this.onClickMinus}
            disabled={isButtonsDisabled}
          >
            -
          </button>
          <p className="time-container">{timeLimitInMinutes}</p>
          <button
            className="operator-btn"
            type="button"
            onClick={this.onClickPlus}
            disabled={isButtonsDisabled}
          >
            +
          </button>
        </div>
      </div>
    )
  }

  onClickReset = () => {
    this.clearTimerInterval()
    this.setState(initialState)
  }

  incrementTimeElapsedInSeconds = () => {
    const {timeLimitInMinutes, timeElapsedInSeconds} = this.state

    const isTimerCompleted = timeElapsedInSeconds === timeLimitInMinutes * 60

    if (isTimerCompleted) {
      this.clearTimerInterval()
      this.setState({isTimerStarted: false})
    } else {
      this.setState(prevState => ({
        timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
      }))
    }
  }

  onClickStartPauseBtn = () => {
    const {
      timeLimitInMinutes,
      timeElapsedInSeconds,
      isTimerStarted,
    } = this.state

    const isTimerCompleted = timeElapsedInSeconds === timeLimitInMinutes * 60

    if (isTimerCompleted) {
      this.setState({timeElapsedInSeconds: 0})
    }
    if (isTimerStarted) {
      this.clearTimerInterval()
    } else {
      this.intervalId = setInterval(this.incrementTimeElapsedInSeconds, 1000)
    }

    this.setState(prevState => ({isTimerStarted: !prevState.isTimerStarted}))
  }

  renderTimerController = () => {
    const {isTimerStarted} = this.state

    const startPauseImgUrl = isTimerStarted
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

    const startPauseAltText = isTimerStarted ? 'pause icon' : 'play icon'

    const startPauseText = isTimerStarted ? 'Pause' : 'Start'

    return (
      <div className="timer-controller-container">
        <button
          className="startPauseBtn"
          type="button"
          onClick={this.onClickStartPauseBtn}
        >
          <img
            src={startPauseImgUrl}
            className="start-pause-icon"
            alt={startPauseAltText}
          />
          <h1 className="start-pause-reset-text">{startPauseText}</h1>
        </button>
        <div className="reset-container">
          <button
            className="resetBtn"
            onClick={this.onClickReset}
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
              className="reset-icon"
              alt="reset icon"
            />
          </button>

          <h1 className="start-pause-reset-text">Reset</h1>
        </div>
      </div>
    )
  }

  getElapsedSecondsInTimeFormat = () => {
    const {timeLimitInMinutes, timeElapsedInSeconds} = this.state

    const totalRemainingSeconds = timeLimitInMinutes * 60 - timeElapsedInSeconds
    const minutes = Math.floor(totalRemainingSeconds / 60)
    const seconds = Math.floor(totalRemainingSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    console.log('Render() called')
    const {isTimerStarted} = this.state

    const runningPausedText = isTimerStarted ? 'Running' : 'Paused'

    return (
      <div className="app-container">
        <h1 className="main-heading">Digital Timer</h1>
        <div className="digital-timer-container">
          <div className="app-img-container">
            <div className="main-timer">
              <h1 className="timer-text">
                {this.getElapsedSecondsInTimeFormat()}
              </h1>
              <p className="running-paused-text">{runningPausedText}</p>
            </div>
          </div>
          <div className="controls-container">
            {this.renderTimerController()}
            {this.renderTimerLimitController()}
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer

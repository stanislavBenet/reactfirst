import React, { Component } from "react";
//import "./style.css";
import styles from './style.module.css'
class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(0, 0, 0, 0, 0, 0, 0),
    };
    this.intelvalId = null;
  }
  tick = () => {
    this.setState((state, props) => {
      const { date } = this.state;
      const newDate = new Date(date);
      newDate.setSeconds(newDate.getSeconds() + 1);
      return { date: newDate };
    });
  };
  start = () => {
    if (this.intelvalId === null) {
      this.intelvalId = setInterval(this.tick, 1000);
    }
  };
  stop = () => {
    clearInterval(this.intelvalId);
  };
  reset = () => {
    this.stop();
    this.setState({ date: new Date(0, 0, 0, 0, 0, 0, 0) });
  };

  componentWillUnmount() {
    this.stop();
  }
  render() {
    const { date } = this.state;
    return (
      <article className={styles.container}>
        <h2>date: {date.toLocaleTimeString("en-GB")}</h2>
        <button onClick={this.start}>start</button>
        <button onClick={this.reset}>reset</button>
        <button onClick={this.stop}>stop</button>
      </article>
    );
  }
}

export default StopWatch;

import React, { Component } from "react";
import styles from "./StopWatchTimeOut.module.css";

class StopWatchTimeOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: new Date(0, 0, 0, 0, 0, 0, 0),
      stopCounter: false,
    };
    this.intervalId = null;
  }
  step = () => {
    this.setState((state, props) => {
      const { count } = this.state;
      const newDate = new Date(count);
      newDate.setSeconds(newDate.getSeconds() + 1);
      return { count: newDate };
    });
  };

  start = () => {
    if (this.intervalId === null) {
      this.intervalId = setTimeout(this.step, 1000);
    }
  };

  reset = () => {
    this.setState({ count: new Date(0, 0, 0, 0, 0, 0, 0) });
    clearInterval(this.intervalId);
    this.intervalId = null;
  };
  stop = () => {
    clearInterval(this.intervalId);
  };

  componentDidUpdate() {
    if (this.intervalId !== null) {
        this.intervalId = setTimeout(this.step, 1000);
    }
  }
  componentWillUnmount() {
    this.stop();
  }
  render() {
    const { count } = this.state;
    return (
      <article className={styles.container}>
        <p className={styles.showTime}>{count.toLocaleTimeString("en-GB")}</p>
        <div>
          <button onClick={this.start}>start</button>
          <button onClick={this.reset}>reset</button>
          <button onClick={this.stop}>stop</button>
        </div>
      </article>
    );
  }
}

export default StopWatchTimeOut;

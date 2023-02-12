import React, { Component } from "react";
import { format, add } from "date-fns";
//import "./style.css";
import styles from "./StopWatch.module.css";
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
      // const { date } = this.state; Можно забрать из стэйта сразу в функции
      // const newDate = new Date(date);
      // newDate.setSeconds(newDate.getSeconds() + 1);
      //эти две строчки заменяем библиотекой дата.фнс и используем функцию добавить секунду

      // const newDate = addSeconds(date, 1);
      // return { date: newDate };
      // можно не создавать отдельно, а сразу менять значение в стэйте с помощью функции

      // return { date: addSeconds(state.date, 1) };// эможно использовать узкие функции специально для секунд и т.д, а можно использовать унифицированую функцию add

      return { date: add(state.date, { seconds: 1 }) };
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
        <h2>{format(date, "HH mm ss")}</h2>
        {/* <h2>date: {date.toLocaleTimeString("en-GB")}</h2> */}
        <button onClick={this.start}>start</button>
        <button onClick={this.reset}>reset</button>
        <button onClick={this.stop}>stop</button>
      </article>
    );
  }
}

export default StopWatch;

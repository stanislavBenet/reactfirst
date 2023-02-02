import { Component } from "react";
import "./App.css";
// import CiaoSection from "./components/СiaoSection";
//  import UserSection from './components/UserSection/index';

// import Ciao from "./components/СiaoSection/Ciao/index";
// import StopWatch from "./components/StopWatch";
import StopWatchTimeOut from "./StopWatchTimeOut/StopWatchTimeOut";

class App extends Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    return (
      <>
        <StopWatchTimeOut />
      </>
    );
  }
}

export default App;

import { Component } from "react";
import "./App.css";
//import UserCard from "./components/UserSection/UserCard";
//import Ciao from "./components/СiaoSection/Ciao";
// import CiaoSection from "./components/СiaoSection";
//  import UserSection from './components/UserSection/index';

// import Ciao from "./components/СiaoSection/Ciao/index";
 import StopWatch from "./components/StopWatch";
//import StopWatchTimeOut from "./StopWatchTimeOut/StopWatchTimeOut";
//import SignInForm from './components/forms/SignInForm/index';
//import CiaoSection from "./components/СiaoSection/index";
// import UserList from "./components/UserSection/UserList";
// const username = {
//   id: 1,
//   firstName: "Brad",
//   lastName: "Pitt",
//   isSelected: false,
// };
class App extends Component {
  render() {
    return (
      <>
        {/* <Ciao username={username.firstName} /> */}
        <StopWatch />
        {/* <UserCard user={username} />
        <UserList users={[1, 2, 3]} /> */}
      </>
    );
  }
}

export default App;

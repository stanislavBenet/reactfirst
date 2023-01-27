import { Component } from "react";
class Ciao extends Component {
  constructor(props) {
    super(props);
    this.state = { isHi: true };
  }
  handlerBtn = () => {
    this.setState({ isHi: !this.state.isHi });
  };
  render() {
    const { username } = this.props;
    const { isHi } = this.state;
    const greetingSay = isHi ? "Hi" : "Bye";
    return (
      <h2>
        {greetingSay}, {username}!
        <button onClick={this.handlerBtn}>{this.state.isHi ? "Bye" : "Hi"}</button>
      </h2>
    );
  }
}

export default Ciao;

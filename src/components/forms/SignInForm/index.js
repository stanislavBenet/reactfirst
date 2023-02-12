import React, { Component } from "react";
import cx from "classnames";
import styles from "./SignInForm.module.css";

const initialValues = {
  email: "",
  password: "",
  isemailValid: true,
  ispasswordValid: true,
};
class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialValues };
  }
  formHandler = (event) => {
    event.preventDefault();
    event.target.reset();
    this.setState = { ...initialValues };
  };
  inputHundler = ({ target: { name, value } }) =>
    this.setState({ [name]: value, [`is${name}Valid`]: !value.includes(" ") });
  render() {
    const { email, password, isemailValid, ispasswordValid } = this.state;

    const emailClasses = cx(styles.input, {
      [styles.invalid]: !isemailValid,
    });
    const passwordClasses = cx(styles.input, {
      [styles.invalid]: !ispasswordValid,
    });
    return (
      <form className={styles.form} onSubmit={this.formHandler}>
        <input
          value={email}
          className={emailClasses}
          onChange={this.inputHundler}
          type="email"
          name="email"
          placeholder="email"
        ></input>
        <input
          value={password}
          className={passwordClasses}
          onChange={this.inputHundler}
          type="password"
          name="password"
          placeholder="password"
        ></input>
        <input type="submit" name="send"></input>
      </form>
    );
  }
}

export default SignInForm;

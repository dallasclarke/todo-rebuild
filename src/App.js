import React, { Component } from "react";
import validator from "validator";
import Todo from "./components/Todo/Todo";
import Message from "./components/shared/Message";

class App extends Component {
  state = {
    isAuth: true,
    email: "",
    password: "",
    errorMessage: "",
    isError: false,
    isPasswordError: false,
    isPasswordErrorMessage: "",
    submitErrorMessage: "",
    isSubmitError: false,
    isSuccessMessage: false,
    successMessage: "",
  };

  handleOnChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        const { email, password } = this.state;
        let isEmail = validator.isEmail(email);

        if (isEmail) {
          this.setState({
            isError: false,
            errorMessage: "",
          });
        } else {
          this.setState({
            isError: true,
            errorMessage: "Please enter a correct email!",
          });
        }
      }
    );
  };

  handleOnChangePassword = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        const { password } = this.state;

        let isPassword = validator.matches(
          password,
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
        );

        if (isPassword) {
          this.setState({
            isPasswordError: false,
            isPasswordErrorMessage: "",
          });
        } else {
          this.setState({
            isPasswordError: true,
            isPasswordErrorMessage:
              "Password must contain 1 Uppercase, 1 lowercase, 1 special character & symbol",
          });
        }
      }
    );
  };

  handleOnSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    if (validator.isEmpty(email) && validator.isEmpty(password)) {
      this.setState({
        isSubmitError: true,
        submitErrorMessage: "Cannot have empty email & password",
      });
      return;
    } else {
      this.setState({
        isSubmitError: false,
        submitErrorMessage: "",
      });
    }

    if (validator.isEmpty(email)) {
      this.setState({
        isSubmitError: true,
        submitErrorMessage: "Cannot have empty email",
      });
    } else {
      this.setState({
        isSubmitError: false,
        submitErrorMessage: "",
      });
    }

    if (validator.isEmpty(password)) {
      this.setState({
        isSubmitError: true,
        submitErrorMessage: "Cannot have empty password",
      });
    } else {
      this.setState({
        isSubmitError: false,
        submitErrorMessage: "",
      });
    }
  };

  render() {
    const {
      isAuth,
      errorMessage,
      isError,
      isPasswordError,
      isPasswordErrorMessage,
      isSubmitError,
      submitErrorMessage,
      isSuccessMessage,
      successMessage,
    } = this.state;

    let showTodoComponent = isAuth ? (
      <Todo />
    ) : (
      <form onSubmit={this.handleOnSubmit}>
        {" "}
        {isError ? (
          <Message className={"error-message"} message={errorMessage} />
        ) : (
          ""
        )}
        {isSubmitError ? (
          <div className="error-message">{submitErrorMessage}</div>
        ) : (
          ""
        )}
        {isSuccessMessage ? (
          <Message className={"success-message"} message={successMessage} />
        ) : (
          ""
        )}
        <input
          type="text"
          placeholder="enter email"
          name="email"
          onChange={this.handleOnChange}
          value={this.state.email}
        />{" "}
        <br />
        {isPasswordError ? <div>{isPasswordErrorMessage}</div> : ""}
        <input
          type="text"
          placeholder="enter password"
          name="password"
          onChange={this.handleOnChangePassword}
          value={this.state.password}
        />{" "}
        <br /> <button>Sign up</button>
      </form>
    );

    return (
      <div style={{ textAlign: "center", marginTop: "15%" }}>
        {showTodoComponent}
      </div>
    );
  }
}

export default App;

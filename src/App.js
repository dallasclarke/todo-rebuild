import React, { Component } from "react";
import validator from "validator";
import Todo from "./components/Todo/Todo";

class App extends Component {
  state = {
    isAuth: false,
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
    <Todo />;

    return (
      <div style={{ textAlign: "center", marginTop: "15%" }}>
        <Todo />
      </div>
    );
  }
}

export default App;

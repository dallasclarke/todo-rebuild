import React, {Component} from "react";
import Todo from "./components/Todo/Todo";



class App extends Component {
  state = {
    errorMessage: "",
    isError: false,
    submitErrorMessage: "",
    isSubmitError: false,

  };

  render() {
    <Todo /> 

    return (
      <div style={{textAlign: "center", marginTop: "15%"}}>
        <Todo />
      </div>
    )
  }
}

export default App;

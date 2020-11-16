import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoView from "./TodoView";

export default class Todo extends Component {
  state = {
    todoList: [
      {
        id: uuidv4(),
        todo: "Walk the dog",
        editToggle: false,
      },
      {
        id: uuidv4(),
        todo: "Buy Milk",
        editToggle: false,
      },
      {
        id: uuidv4(),
        todo: "Clean the shorts",
        editToggle: false,
      },
    ],
    todoValue: "",
    showErrorMessage: false,
    showNoTodosMessages: false,
    showEditInput: false,
    editTodoValue: "",
    disabledEditButton: false,
  };

  handleInputChange = (event) => {
    if (this.state.showErrorMessage) {
      this.setState({
        showErrorMessage: false,
      });
    }

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.todoValue.length === 0) {
      this.setState({
        showErrorMessage: true,
      });
      return;
    }

    let newTodoObj = {
      id: uuidv4(),
      todo: this.state.todoValue,
    };

    let newArray = [...this.state.todoList, newTodoObj];
    // let newArray = [...this.state.todoList];
    // newArray.push(newTodoObj);

    this.setState(
      {
        todoList: newArray,
        todoValue: "",
      },
      () => {
        if (this.state.todoList.length > 0) {
          this.setState({
            showNoTodosMessage: false,
          });
        }
      }
    );
  };

  appHandleDeleteTodo = (targetID) => {
    let copiedArray = [...this.state.todoList];

    let filteredArray = copiedArray.filter(({ id }) => {
      return id !== targetID;
    });

    this.setState(
      {
        todoList: filteredArray,
      },
      () => {
        if (this.state.todoList.length === 0) {
          this.setState({
            showNoTodosMessage: true,
          });
        }
      }
    );
  };

  appHandleEditTodo = (targetID) => {
    let copiedArray = [...this.state.todoList];
    let editTodoValue;

    copiedArray.map((item) => {
      if (item.id === targetID) {
        item.editToggle = true;
        editTodoValue = item.todo;
      }
    });

    this.setState({
      todoList: copiedArray,
      showEditInput: true,
      editTodoValue: editTodoValue,
      disabledEditButton: true,
    });
  };

  appHandleEditTodoOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  appHandleEditSubmit = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const {
      todoList,
      showErrorMessage,
      showNoTodosMessages,
      showEditInput,
      editTodoValue,
      disabledEditButton,
    } = this.state;

    return (
      <div style={{ textAlign: "center" }}>
        {showErrorMessage ? (
          <div style={{ color: "red", marginTop: 10 }}>
            Please, enter something todo!
          </div>
        ) : null}
        <input
          onChange={this.handleInputChange}
          style={{ marginTop: 20 }}
          type="text"
          name="todoValue"
          value={this.state.todoValue}
        />{" "}
        <button onClick={this.handleSubmit}>Add</button>
        {showNoTodosMessages ? (
          <div style={{ marginTop: 10, color: "blue" }}>
            Please add something todo!
          </div>
        ) : (
          <TodoView
            todoList={todoList}
            appHandleDeleteTodo={this.appHandleDeleteTodo}
            showEditInput={showEditInput}
            appHandleEditTodo={this.appHandle}
            editTodoValue={editTodoValue}
            appHandleEditTodoOnChange={this.appHandleEditTodoOnChange}
            appHandleEditSubmit={this.appHandleEditSubmit}
            disabledEditButton={disabledEditButton}
          />
        )}
      </div>
    );
  }
}

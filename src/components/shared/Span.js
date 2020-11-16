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
            }
        ]
    }
}
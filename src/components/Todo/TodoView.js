import React from "react";
import { arrayOf, shape, number, string } from "prop-type";
import "./TodoView.css";

const TodoView = ({ todoList, showEditInput, editTodoValue }) => {
  
  
  
  
  return (
    <ul style={{ listStyle: "none" }}>
      {todoList.map(({ id, todo, editToggle }) => {
        return (
          <li key={id} style={{ margin: 20 }}>
            {showEditInput && editToggle ? (
              <input type="text" name="editTodoValue" value={editTodoValue} />
            ) : (
              <Span value={todo} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoView;

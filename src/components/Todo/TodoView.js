import React from "react";
// import { arrayOf, shape, number, string } from "prop-type";
import "./TodoView.css";
import Span from "../shared/Span";

const TodoView = ({
  todoList,
  appHandleDeleteTodo,
  showEditInput,
  appHandleEditTodo,
  appHandleEditTodoOnChange,
  editTodoValue,
  appHandleEditSubmit,
  disabledEditButton,
}) => {
    const todoViewHandleDeleteButton = (id) => {
        appHandleDeleteTodo(id)
    };

    const todoEditHandleButton = (id) => {
        appHandleEditTodo(id);
    };

    const todoEditSubmitButton = (id) => {
        appHandleEditSubmit(id);
    };


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
            {showEditInput && editToggle ? (
              <Span
                value={"Update"}
                id={id}
                onClick={todoEditSubmitButton}
                className="todo-button-shared-style edit-button"
              />
            ) : (
              <Span
                value={"Edit"}
                id={id}
                onClick={todoEditHandleButton}
                className={`todo-button-shared-style edit-button`}
                disabledClass="disabled"
                disabledButton={disabledEditButton}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

// TodoView.propTypes = {
//     todoList: arrayOf(
//         shape({
//             id: string.isRequired,
//             todo: string.isRequired,
//         })
//     )
// };

export default TodoView;

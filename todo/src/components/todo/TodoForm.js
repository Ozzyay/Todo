import Backdrop from "../UI/Backdrop";
import { createPortal } from "react-dom";
import TodoShowForm from "./TodoShowForm";
import React from "react";

const TodoForm = (props) => {
  const formCloseHandler = (e) => {
    props.onClose();
  };

  const formSubmitHandler = (data) => {
    props.onFinish(data);
  };
  return (
    <React.Fragment>
      <Backdrop onClick={formCloseHandler} />
      {createPortal(
        <TodoShowForm onEnter={formSubmitHandler} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default TodoForm;

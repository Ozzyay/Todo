import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Layout/Header";
import AddIcon from "./components/UI/AddIcon";
import TodoForm from "./components/todo/TodoForm";
import Todo from "./components/todo/Todo";
function App() {
  const [formStatus, setFormStatus] = useState(false);
  const formCloseHandler = () => {
    setFormStatus(false);
  };

  const formOpenHandler = (e) => {
    setFormStatus(true);
  };

  const formDataHandler = () => {
    setFormStatus(false);
  };
  return (
    <React.Fragment>
      {formStatus && (
        <TodoForm onClose={formCloseHandler} onFinish={formDataHandler} />
      )}
      <Header />
      <div className="btn--container">
        <button className="button" onClick={formOpenHandler}>
          {AddIcon}Add To-do
        </button>
      </div>
      <div className={"main"}>
        <Todo />
      </div>
    </React.Fragment>
  );
}

export default App;

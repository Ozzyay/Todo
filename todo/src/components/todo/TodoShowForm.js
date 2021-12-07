import styles from "./TodoForm.module.scss";
import { useState, useRef } from "react";
import { TodoActions } from "../../store/TodoSlice";
import { useDispatch } from "react-redux";
const TodoShowForm = (props) => {
  const dispatch = useDispatch();
  const [formError, setFormError] = useState(false);
  const descInput = useRef();
  const titleInput = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    let desc = descInput.current.value;
    let title = titleInput.current.value;
    if (desc.trim() !== "" && title.trim() !== "") {
      props.onEnter();
      dispatch(TodoActions.addItem({ title: title, description: desc }));
    } else {
      setFormError(true);
    }
  };

  const disableError = (e) => {
    setFormError(false);
  };
  return (
    <div className={styles.cont}>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            className={styles.title}
            ref={titleInput}
            onChange={disableError}
          />
        </div>
        <div>
          <label htmlFor="desc">Description:</label>
          <input
            id="desc"
            type="text"
            name="desc"
            className={styles.desc}
            ref={descInput}
            onChange={disableError}
          />
        </div>
        <button type="submit">Add</button>
        {formError && <p>Please enter data in to the form fields!</p>}
      </form>
    </div>
  );
};

export default TodoShowForm;

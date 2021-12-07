import React, { useRef, useState } from "react";
import styles from "./TodoItem.module.scss";
import Card from "../UI/Card";
import { TodoActions } from "../../store/TodoSlice";
import { useDispatch } from "react-redux";
const TodoItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const editTitleValue = useRef();
  const editDescValue = useRef();
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(TodoActions.removeItem(props));
  };

  const editHandler = () => {
    setIsEditing(true);
  };

  const cancelEditingHandler = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const submitEditHandler = (e) => {
    e.preventDefault();
    const oldItem = { title: props.title, description: props.description };
    const newItem = {
      title: editTitleValue.current.value,
      description: editDescValue.current.value,
    };
    dispatch(TodoActions.editItem({ prev: oldItem, new: newItem }));
    setIsEditing(false);
  };
  return (
    <Card>
      {!isEditing && (
        <React.Fragment>
          <li className={styles.li}>{props.title}</li>
          <li className={styles.li}>{props.description}</li>
          <div className={styles.btnCont}>
            <button onClick={editHandler}>Edit</button>
            <button onClick={deleteHandler}>✖</button>
          </div>
        </React.Fragment>
      )}
      {isEditing && (
        <React.Fragment>
          <form className={styles.form} onSubmit={submitEditHandler}>
            <input
              type="text"
              placeholder={props.title}
              className={styles.li}
              ref={editTitleValue}
            ></input>
            <input
              type="text"
              placeholder={props.description}
              className={styles.li}
              ref={editDescValue}
            ></input>
            <div className={styles.btnCont}>
              <button type="submit"> Submit </button>
              <button onClick={cancelEditingHandler}> Cancel </button>
            </div>
          </form>
        </React.Fragment>
      )}
    </Card>
  );
};

export default TodoItem;

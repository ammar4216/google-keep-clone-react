import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../../redux/actions";
import style from "./TodoItems.module.css";
import ColorPicker from "../../ColorPallete/ColorPicker";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ArchiveIcon from "@material-ui/icons/Archive";

function TodoItems({ todo }) {
  const [isUpdate, setIsUpdate] = useState(false);

  const dispatch = useDispatch();

  const textRef = useRef(null);
  const titleRef = useRef(null);

  const deleteHandler = () => {
    dispatch(deleteTodo(todo.id));
  };

  const updateSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(
      updateTodo({
        message: textRef.current.value,
        title: titleRef.current.value,
        id: todo.id,
      })
    );
    setIsUpdate(false);
    textRef.current = null;
    titleRef.current = null;
  };

  const renderForm = () => {
    return (
      <form onSubmit={updateSubmitHandler} className={style.updateForm}>
        <input ref={titleRef} type="text" defaultValue={todo.title} />
        <textarea
          ref={textRef}
          cols="30"
          rows="10"
          defaultValue={todo.message}
        ></textarea>
        <div className={style.buttonArea}>
          <button type="submit">
            <EditIcon />
          </button>
        </div>
      </form>
    );
  };

  const renderItems = () => {
    return (
      <div className={style.todoItems}>
        <div className={style.contentArea}>
          <h3>{todo.title}</h3>
          <textarea readOnly defaultValue={todo.message}></textarea>
        </div>
        <div className={style.buttonsArea}>
          <ColorPicker />
          <button>
            <ArchiveIcon />
          </button>
          <button onClick={() => setIsUpdate(true)}>
            <EditIcon />
          </button>
          <button onClick={deleteHandler}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    );
  };

  return <>{isUpdate ? renderForm() : renderItems()}</>;
}

export default TodoItems;

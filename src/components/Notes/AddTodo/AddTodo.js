import React, { useState } from "react";
import { useDispatch } from "react-redux";
import cuid from "cuid";
import AddIcon from "@material-ui/icons/Add";
// import ColorLensIcon from "@material-ui/icons/ColorLens";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";

import style from "./AddTodo.module.css";
import { addTodo } from "../../../redux/actions";
import ColorPicker from "../../ColorPallete/ColorPicker";

function AddTodo() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      id: cuid(),
      title: title,
      message: message,
    };

    dispatch(addTodo(data));

    setTitle("");
    setMessage("");
  };
  return (
    <>
      <form className={style.form} onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={titleHandler}
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="type here.."
          value={message}
          onChange={messageHandler}
        ></textarea>
        <div className={style.buttonArea}>
          <div className={style.extraButtons}>
            <ColorPicker />

            <button type="reset">
              <InsertPhotoIcon />
            </button>
            <button type="reset">
              <MoreVertIcon />
            </button>
          </div>

          <div className={style.submitButton}>
            <button type="submit">
              <AddIcon />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddTodo;

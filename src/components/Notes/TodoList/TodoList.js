import React from "react";
import { useSelector } from "react-redux";
import TodoItems from "../TodoItems/TodoItems";
import style from "./TodoList.module.css";

function TodoList() {
  const todoObj = useSelector((state) => state.todos.data);
  return (
    <div className={style.todoList}>
      {todoObj.map((todo) => {
        return <TodoItems todo={todo} key={todo.id} />;
      })}
    </div>
  );
}

export default TodoList;

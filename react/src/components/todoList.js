import React from "react";
import ToDoItem from "./todoitem";

const ToDoList = ({toDoList, handleToggle, handleDelete}) => {
      

  return (
      <div>
          {toDoList.map(todo => {
              return (
                  <ToDoItem key={todo.id} todo={todo} handleToggle={handleToggle} handleDelete={handleDelete} />
              )
          })}
      </div>
  );
};

export default ToDoList;
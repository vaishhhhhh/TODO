import React from "react";

function Todo(props) {
  return (
    <>
      <li onClick={() => props.Check(props.id)}>{props.text}</li>
    </>
  );
}

export default Todo;

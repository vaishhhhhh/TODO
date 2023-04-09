import React, { useState } from "react";
import Todo from "./Todo";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function newValue(event) {
    const val = event.target.value;
    setInputText(val);
  }

  function clicked() {
    setItems((preVal) => {
      return [...preVal, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((preVal) => {
      return preVal.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={newValue} value={inputText} type="text" />
        <button onClick={clicked}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <Todo key={index} id={index} text={item} Check={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

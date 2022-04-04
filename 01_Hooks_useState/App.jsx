import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [num, addCount] = useState(0);
  // 声明多个 state 变量！
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You have this {num} </p>
      <button onClick={() => addCount(num + 2)}>Click to add 2</button>
      <p>You have this {fruit} </p>
      <button onClick={() => setFruit("apple")}>Click to change fruit</button>
    </div>
  );
}

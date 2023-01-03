import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const add = () => {
    setNumber(number + 1);
  };

  const sub = () => {
    setNumber(number - 1);
  };

  return (
    <div className="container w-screen h-screen mx-auto bg-gray-100 flex justify-center items-center flex-col">
      <div className="counter">
        <button onClick={sub}>-</button>
        <p className="number">{number}</p>
        <button onClick={add}>+</button>
      </div>
      <div>{number}</div>
    </div>
  );
}

export default App;

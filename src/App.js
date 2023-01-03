import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const add = () => {
    setNumber(number + 1);
  };

  const sub = () => {
    setNumber(number - 1);
  };

  useEffect(() => {
    // 當number值改變時，會觸發前面的事
    // 判斷 number 現在是奇數還是偶數
    if (number % 2 === 0) {
      console.log(`${number} is even`);
    } else {
      console.log(`${number} is odd`);
    }
  }, [number]);

  return (
    <div className="container w-screen h-screen mx-auto flex justify-center items-center flex-col">
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

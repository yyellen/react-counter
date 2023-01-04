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
    if (number < 2) {
      console.log(`${number}不是質數`);
      document.title = `${number}不是質數`;
      return;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        console.log(`${number}不是質數`);
        document.title = `${number}不是質數`;
        return;
      }
    }
    console.log(`${number}是質數`);
    document.title = `${number}是質數`;
    return;
  }, [number]);

  return (
    <div className="container w-screen h-screen mx-auto flex justify-center items-center flex-col">
      <div className="counter">
        <button onClick={sub}>-</button>
        <p className="number">{number}</p>
        <button onClick={add}>+</button>
      </div>
    </div>
  );
}

export default App;

import style from "./Counter.module.css"
import { useState, useEffect } from "react";
import { isPrime } from "../../utils/util";
import Button from "./Button"

const Counter = () => {
  const [count, setCount] = useState(0);
  const [prime, setPrime] = useState(false);

  const add = () => {
    setCount(count + 1);
  };

  const sub = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    setPrime(isPrime(count));
  }, [count]);

  return (
    <div className={ style.counter }>
      <div className={ style.count_container }>
        <p className={ style.count }>{ count }</p>
      </div>
      <div className={ prime ? style.is_prime : style.not_prime }>
      { prime ? "是質數" : "不是質數" }
      </div>
      <div className={ style.buttons_container }>
        <Button action={ sub } text="-" style={ `${style.button} ${style.add_button}` }></Button>
        <Button action={ add } text="+" style={ `${style.button} ${style.sub_button}` }></Button>
      </div>
    </div>
  );
}

export default Counter;

import { useState } from "react";

function Clicker() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>

      <button onClick={increase}>Increase</button>
    </>
  );
}

export default Clicker;

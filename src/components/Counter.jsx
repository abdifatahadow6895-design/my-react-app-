import { useState } from "react";

function Tiriye() {
  const [count, setCount] = useState(10);

  return (
    <div style={{backgroundColor:"yellow"}}>
      <h1>{count}</h1>

      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count  +1)}>Increase</button>
    </div>
  );
}
export default Tiriye;

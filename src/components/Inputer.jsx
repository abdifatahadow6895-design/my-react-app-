import { useState } from "react";

function Inputer() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input type="text" onChange={handleChange} />

      <p>You typed: {text}</p>
    </>
  );
}

export default Inputer;

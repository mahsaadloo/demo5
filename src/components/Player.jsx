import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnterPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const HandleChange = (event) => {
    setEnterPlayerName(event.target.value);
  };

  const HandleClick = () => {
    setSubmitted(true);
  };

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={HandleChange} value={enteredPlayerName} />
        <button onClick={HandleClick}>Set Name</button>
      </p>
    </section>
  );
}

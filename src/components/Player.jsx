import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnterPlayerName] = useState("");

  const HandleClick = () => {
    setEnterPlayerName(playerName.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={HandleClick}>Set Name</button>
      </p>
    </section>
  );
}

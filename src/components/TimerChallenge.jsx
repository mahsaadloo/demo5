import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal.jsx";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const HandleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  };

  const HandleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <>
      {/* {timerExpired && ( */}
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      {/* )} */}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? HandleStop : HandleStart}>
            {timerStarted ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : ""}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;

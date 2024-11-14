import React, { useRef, useState } from "react";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const HandleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  };

  const HandleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
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
  );
};

export default TimerChallenge;

import "./styles.css";

import React, { useState, useRef } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const timerRef = useRef();

  const start = () => {
    if (!running) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setRunning(true);
    }
  };

  const stop = () => {
    if (running) {
      clearInterval(timerRef.current);
      setRunning(false);
    }
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setRunning(false);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p className="sub-heading">Time: {time} seconds</p>
      <button className="first" onClick={start}>
        Start
      </button>
      <button className="second" onClick={stop}>
        Stop
      </button>
      <button className="third" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

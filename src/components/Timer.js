import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
// import audio from "../assets/electronic-intro-music.mp3";

const Timer = () => {
  const [counter, setCounter] = useState(60);
  const [isOn, setIsOn] = useState(false);

  function toggle() {
    setIsOn(!isOn);
  }

  function reset() {
    setCounter(60);
    setIsOn(false);
  }

  useEffect(() => {
    let interval = null;
    if (isOn && counter > 0) {
      interval = setInterval(() => {
        // let audio = new Audio(audio);
        // audio.play();
        setCounter((counter) => counter - 1);
      }, 1000);
    } else if (!isOn && counter !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isOn, counter]);

  return (
    <div className="app">
      <div className="time">Timer: {counter}</div>
      <div className="rowTimer">
        <Button className="timerButton btn btn-primary btn-sm" onClick={toggle}>
          {isOn ? "Stop" : "Start"}
        </Button>
        <button className="timerButton btn btn-warning btn-sm" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;

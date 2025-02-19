import styled from "styled-components";

const TimerContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 200px;
  border: 1px solid black;
`;

const TimerRow = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
`;

const TimerItem = styled.div`
  padding: 20px;
  width: 100%;
  border: 1px solid black;
  background-color: lightblue;
  font-size: 2rem;
`;

const StartButton = styled.button`
  padding: 10px 20px;
  border: 1px solid black;
  background-color: ${(props) => (props.toggleState ? "#3c91e6" : "#ffffff")};
  color: ${(props) => (props.toggleState ? "#1f0318" : "#000000")};
  cursor: pointer;
  margin-bottom: 10px;
  width: 200px;
`;

const ResetButton = styled.button`
  padding: 10px 20px;
  border: 1px solid black;
  background-color: ${(props) => (props.toggleState ? "#3c91e6" : "#ffffff")};
  color: ${(props) => (props.toggleState ? "#1f0318" : "#000000")};
  cursor: pointer;
  margin-bottom: 10px;
  width: 200px;
`;

const RecordButton = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  background-color: #e7e7e7;
  cursor: pointer;
`;

import React from "react";
import { useState, useEffect } from "react";

export function Timer({ initialTime = 0 }) {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(initialTime);

  const displayTime = (time) => {
    return Math.min(time, 59.99).toFixed(0).padStart(2, "0");
  };

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]); // isRunning 상태가 변경될 때마다 실행

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };
  const resetTimer = () => {
    setTime(0);
  };

  const hours = Math.floor(time / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const totalCentiseconds = Math.floor((time % (1000 * 60)) / 10);
  const secondsPart = Math.floor(totalCentiseconds / 100);
  const centisecondsPart = totalCentiseconds % 100;

  return (
    <TimerContainer>
      <TimerRow>
        <TimerItem>
          {displayTime(hours)}:{displayTime(minutes)}:
          {String(secondsPart).padStart(2, "0")}.
          {String(centisecondsPart).padStart(2, "0")}
        </TimerItem>
      </TimerRow>
      <ButtonRow>
        <StartButton onClick={toggleTimer} toggleState={isRunning}>
          {isRunning ? "Pause" : "Start"}
        </StartButton>
        <ResetButton onClick={resetTimer}> Reset </ResetButton>
      </ButtonRow>
      <ButtonRow>
        <RecordButton>Record</RecordButton>
      </ButtonRow>
    </TimerContainer>
  );
}

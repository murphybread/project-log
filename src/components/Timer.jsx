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

const TimerItem = styled.div`
  padding: 20px;
  border: 1px solid black;
  background-color: lightblue;
`;

const StartButton = styled.button`
  padding: 10px 20px;
  border: 1px solid black;
  background-color: #afafaf;
  cursor: pointer;
  margin-bottom: 10px;
  width: 200px;
`;

const RecordButton = styled.button`
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #e7e7e7;
  cursor: pointer;
  align-self: end;
`;

import React from "react";
import { useState, useEffect } from "react";

export function Timer() {
  const displayTime = (time) => {
    return Math.min(time, 59.99).toFixed(0).padStart(2, "0");
  };

  const [time, setTime] = useState(4000000);
  useEffect(() => {
    const id = setInterval(() => setTime((prev) => prev + 10), 10);
    return () => clearInterval(id);
  }, []);

  const hours = Math.floor(time / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  return (
    <TimerContainer>
      <TimerRow>
        <TimerItem>{displayTime(hours)}H</TimerItem>
        <TimerItem>{displayTime(minutes)}M</TimerItem>
        <TimerItem>{displayTime(seconds)}S</TimerItem>
      </TimerRow>
      <StartButton>Start</StartButton>
      <RecordButton>Record</RecordButton>
    </TimerContainer>
  );
}

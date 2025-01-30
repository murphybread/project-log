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

export function Timer() {
  return (
    <TimerContainer>
      <TimerRow>
        <TimerItem>00h</TimerItem>
        <TimerItem>00M</TimerItem>
        <TimerItem>0.000S</TimerItem>
      </TimerRow>
      <StartButton>Start</StartButton>
      <RecordButton>Record</RecordButton>
    </TimerContainer>
  );
}

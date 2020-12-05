import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../init/rootReducer";
import { addTime } from "../../homeScreen/action";
import { generateTime } from "../../../utils/generateTime";

const P = styled.p`
  font-size: 26px;
  color: white;
`;

export const Timer: FC = () => {
  const dispatch = useDispatch();
  const [timerTime, setTimerTime] = useState(0);
  const { isRunning, win } = useSelector((state: AppState) => state.game);
  useEffect(() => {
    let timer: any;
    if (isRunning) {
      timer = setInterval(() => {
        setTimerTime((timerTime) => timerTime + 1);
      }, 1000);
    }
    if (win) {
      dispatch(addTime(timerTime));
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, win]);
  const time = generateTime(timerTime);
  return <span>{isRunning ? <P>{time}</P> : <P>00 : 00 : 00</P>}</span>;
};

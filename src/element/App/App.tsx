import React, { FC } from "react";
import styled from "@emotion/styled";
import { HomeScreen } from "../../bus/homeScreen/HomeScreen";
import { GameScreen } from "../../bus/gameScreen/GameScreen";
import { useSelector } from "react-redux";
import { AppState } from "../../init/rootReducer";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    302deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(152, 190, 228, 1) 50%
  );
`;

export const App: FC = () => {
  const { name } = useSelector((state: AppState) => state.home);
  return <Container>{name ? <GameScreen /> : <HomeScreen />}</Container>;
};

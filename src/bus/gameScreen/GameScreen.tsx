import React, { FC } from "react";
import { Cart } from "./cart/Cart";
import { Button, Container, WrapperGame, WrapperMenu } from "./gameScreenStyle";
import { Icon } from "../../utils/icons";
import { useDispatch } from "react-redux";
import { startGame } from "./action";
import { Timer } from "./timer/Timer";
import { useGameScreen } from "./hooks/useGameScreen";

export const GameScreen: FC = () => {
  const dispatch = useDispatch();
  const { carts, isRunning } = useGameScreen();
  /*const { carts, openCards, isRunning, win } = useSelector(
    (state: AppState) => state.game
  );
  useEffect(() => {
    //@ts-ignore
    if (openCards.length === 18 && !win) {
      dispatch(updateWin());
      setTimeout(() => {
        dispatch(addNewUser());
        dispatch(resetUser());
      }, 2000);
    }
  }, [openCards]);
  useEffect(() => {
    dispatch(generateCart(generateCards(icons)));
  }, []);*/
  const toStart = () => {
    dispatch(startGame());
  };
  //@ts-ignore
  const gameDashboard = carts.map((el, index) => (
    <Cart open={el.open} key={el.id} name={el}>
      {Icon(el, "100%")}
    </Cart>
  ));
  return (
    <Container>
      <WrapperGame>
        {isRunning ? gameDashboard : <p>Приятной игры</p>}
      </WrapperGame>
      <WrapperMenu>
        <Button disabled={isRunning} onClick={toStart}>
          Start
        </Button>
        <Timer />
      </WrapperMenu>
    </Container>
  );
};

import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../init/rootReducer";
import { useEffect } from "react";
import { generateCard, updateWin } from "../action";
import { addNewUser, resetUser } from "../../homeScreen/action";
import { generateCards } from "../../../utils/generateCards";
import { icons } from "../icon";

export const useGameScreen = () => {
  const dispatch = useDispatch();
  const { carts, openCards, isRunning, win } = useSelector(
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
    dispatch(generateCard(generateCards(icons)));
  }, []);
  return {
    carts,
    isRunning,
    win
  };
};

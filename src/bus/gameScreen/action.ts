import {
  ADD_CARDS,
  ADD_OPEN_CARD,
  ADD_OPEN_CARDS,
  DISABLED_CARD,
  RESET_OPEN_CARD,
  SET_TIMER_ID,
  START_GAME,
  STOP_GAME,
  UPDATE_OPEN_CARD,
  UPDATE_WIN,
} from "./types";
import { Dispatch } from "redux";

export const addOpenCard = (name: {
  name: string;
  open: boolean;
  id: number;
}) => {
  return { type: ADD_OPEN_CARD, payload: name };
};

export const generateCard = (carts: string[]) => {
  return {
    type: ADD_CARDS,
    payload: carts,
  };
};

export const resetOpenCard = () => {
  return {
    type: RESET_OPEN_CARD,
  };
};

export const addCards = (name: string) => {
  return {
    type: ADD_OPEN_CARDS,
    payload: name,
  };
};

export const startGame = () => {
  return {
    type: START_GAME,
  };
};

export const disabledCard = () => {
  return {
    type: DISABLED_CARD,
  };
};

export const updateCards = (name: {
  name: string;
  open: boolean;
  id: number;
}) => {
  return {
    type: UPDATE_OPEN_CARD,
    payload: name,
  };
};

export const updateWin = () => {
  return {
    type: UPDATE_WIN,
  };
};

export const setTimerId = (payload: any) => {
  return {
    type: SET_TIMER_ID,
    payload,
  };
};

export const addCard = (card: { name: string; open: boolean; id: number }) => (
  dispatch: Dispatch,
  getState: any
) => {
  const { game } = getState();
  const { openCard, openCards, timerId } = game;
  dispatch(updateCards(card));
  // Тамер закрытия первой карты
  if (!openCard) {
    const timer = setTimeout(() => {
      dispatch(updateCards(card));
      dispatch(resetOpenCard());
    }, 5000);
    dispatch(setTimerId(timer));
  } else {
    clearTimeout(timerId);
  }
  // таймер закрытия
  if (openCard) {
    if (openCard.name !== card.name) {
      setTimeout(() => {
        dispatch(updateCards(openCard));
        dispatch(updateCards(card));
        dispatch(resetOpenCard());
        dispatch(disabledCard());
      }, 1000);
      dispatch(disabledCard());
    } else {
      dispatch(resetOpenCard());
    }
  }
  //проверка на совпадение
  if (openCard.name === card.name && openCard.id !== card.id) {
    if (openCards.length === 0) {
      setTimeout(() => {
        dispatch(addCards(card.name));
      }, 1000);
    } else if (openCards.indexOf(card.name) === -1) {
      setTimeout(() => {
        dispatch(addCards(card.name));
      }, 1000);
    }
  } else {
    dispatch(addOpenCard(card));
  }
};

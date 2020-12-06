export const START_GAME = "START_GAME";
export type startGame = {
  type: typeof START_GAME;
};

export const STOP_GAME = "STOP_GAME";
export type stopGame = {
  type: typeof STOP_GAME;
};

export const DISABLED_CARD = "DISABLED_CARD";
export type disabledCard = {
  type: typeof DISABLED_CARD;
};

export const ADD_OPEN_CARD = "ADD_OPEN_CARD";
export type addOpenCard = {
  type: typeof ADD_OPEN_CARD;
  payload: string;
};

export const ADD_OPEN_CARDS = "ADD_OPEN_CARDS";
export type addOpenCards = {
  type: typeof ADD_OPEN_CARDS;
  payload: any;
};

export const ADD_CARDS = "ADD_CARDS";
export type addCards = {
  type: typeof ADD_CARDS;
  payload: string[];
};

export const RESET_OPEN_CARDS = "RESET_OPEN_CARDS";
export type resetOpenCards = {
  type: typeof RESET_OPEN_CARDS;
};

export const RESET_OPEN_CARD = "RESET_OPEN_CARD";
export type resetOpenCard = {
  type: typeof RESET_OPEN_CARD;
};

export const UPDATE_OPEN_CARD = "UPDATE_OPEN_CARD";
export type updateOpenCard = {
  type: typeof UPDATE_OPEN_CARD;
  payload: any;
};

export const UPDATE_WIN = "UPDATE_WIN";
export type updateWin = {
  type: typeof UPDATE_WIN;
};

export const SET_TIMER_ID = "SET_TIMER_ID";
export type setTimerId = {
  type: typeof SET_TIMER_ID;
  payload: number;
};

export type actionGame =
  | updateWin
  | disabledCard
  | startGame
  | stopGame
  | updateOpenCard
  | addOpenCard
  | addOpenCards
  | resetOpenCard
  | addCards
  | resetOpenCards
  | setTimerId;

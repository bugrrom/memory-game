import {
  actionGame,
  ADD_CARDS,
  ADD_OPEN_CARD,
  ADD_OPEN_CARDS,
  DISABLED_CARD,
  RESET_OPEN_CARD,
  RESET_OPEN_CARDS,
  SET_TIMER_ID,
  START_GAME,
  UPDATE_OPEN_CARD,
  UPDATE_WIN,
} from "./types";

const initialState = {
  carts: [],
  openCards: [],
  openCard: "",
  isRunning: false,
  disabled: false,
  win: false,
  timerId: 0,
};

type typeState = {
  carts: { name: string; open: boolean; id: number }[];
  openCard: string;
  openCards: string[];
  isRunning: boolean;
  disabled: boolean;
  win: boolean;
  timerId: number;
};
export const gameReducer = (
  state: typeState = initialState,
  action: actionGame
) => {
  switch (action.type) {
    case DISABLED_CARD:
      return {
        ...state,
        disabled: !state.disabled,
      };
    case START_GAME:
      return {
        ...state,
        isRunning: true,
      };
    case ADD_OPEN_CARD:
      return {
        ...state,
        openCard: action.payload,
      };
    case UPDATE_OPEN_CARD:
      return {
        ...state,
        carts: state.carts.map((el) => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              open: !el.open,
            };
          } else {
            return el;
          }
        }),
      };
    case ADD_OPEN_CARDS:
      return {
        ...state,
        openCards: [...state.openCards, action.payload],
      };
    case ADD_CARDS:
      return {
        ...state,
        carts: action.payload,
      };
    case RESET_OPEN_CARD:
      return {
        ...state,
        openCard: "",
      };

    case RESET_OPEN_CARDS:
      return {
        ...state,
        openCards: [],
      };
    case UPDATE_WIN:
      return {
        ...state,
        win: true,
      };
    case SET_TIMER_ID:
      return {
        ...state,
        timerId: action.payload,
      };
    default:
      return state;
  }
};

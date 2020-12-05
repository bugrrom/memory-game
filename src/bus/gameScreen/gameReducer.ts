import {
  actionGame,
  ADD_CARTS,
  ADD_OPEN_CART,
  ADD_OPEN_CARTS,
  DISABLED_CART,
  RESET_OPEN_CART,
  RESET_OPEN_CARTS,
  START_GAME,
  UPDATE_OPEN_CART,
  UPDATE_WIN,
} from "./types";

const initialState = {
  carts: [],
  openCards: [],
  openCart: "",
  isRunning: false,
  disabled: false,
  win: false,
};

type typeState = {
  carts: { name: string; open: boolean; id: number }[];
  openCart: string;
  openCards: string[];
  isRunning: boolean;
  disabled: boolean;
  win: boolean;
};
export const gameReducer = (
  state: typeState = initialState,
  action: actionGame
) => {
  switch (action.type) {
    case DISABLED_CART:
      return {
        ...state,
        disabled: !state.disabled,
      };
    case START_GAME:
      return {
        ...state,
        isRunning: true,
      };
    case ADD_OPEN_CART:
      return {
        ...state,
        openCart: action.payload,
      };
    case UPDATE_OPEN_CART:
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
    case ADD_OPEN_CARTS:
      return {
        ...state,
        openCards: [...state.openCards, action.payload],
      };
    case ADD_CARTS:
      return {
        ...state,
        carts: action.payload,
      };
    case RESET_OPEN_CART:
      return {
        ...state,
        openCart: "",
      };

    case RESET_OPEN_CARTS:
      return {
        ...state,
        openCards: [],
      };
    case UPDATE_WIN:
      return {
        ...state,
        win: true,
      };
    default:
      return state;
  }
};

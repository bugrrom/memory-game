import {
  ADD_CARTS,
  ADD_OPEN_CART,
  ADD_OPEN_CARTS,
  DISABLED_CART,
  RESET_OPEN_CART,
  START_GAME,
  STOP_GAME,
  UPDATE_OPEN_CART,
  UPDATE_WIN,
} from "./types";
import { Dispatch } from "redux";

export const addOpenCart = (name: {
  name: string;
  open: boolean;
  id: number;
}) => {
  return { type: ADD_OPEN_CART, payload: name };
};

export const generateCart = (carts: string[]) => {
  return {
    type: ADD_CARTS,
    payload: carts,
  };
};

export const resetOpenCart = () => {
  return {
    type: RESET_OPEN_CART,
  };
};

export const addCarts = (name: string) => {
  return {
    type: ADD_OPEN_CARTS,
    payload: name,
  };
};

export const startGame = () => {
  return {
    type: START_GAME,
  };
};

export const disabledCart = () => {
  return {
    type: DISABLED_CART,
  };
};

export const updateCarts = (name: {
  name: string;
  open: boolean;
  id: number;
}) => {
  return {
    type: UPDATE_OPEN_CART,
    payload: name,
  };
};

export const updateWin = () => {
  return {
    type: UPDATE_WIN,
  };
};

export const addCart = (cart: { name: string; open: boolean; id: number }) => (
  dispatch: Dispatch,
  getState: any
) => {
  const { game } = getState();
  dispatch(updateCarts(cart));
  if (game.openCart) {
    if (game.openCart.name !== cart.name) {
      setTimeout(() => {
        dispatch(updateCarts(game.openCart));
        dispatch(updateCarts(cart));
        dispatch(resetOpenCart());
        dispatch(disabledCart());
      }, 3000);
      dispatch(disabledCart());
    } else {
      dispatch(resetOpenCart());
    }
  }
  if (game.openCart.name === cart.name) {
    if (game.openCards.length === 0) {
      dispatch(addCarts(cart.name));
    } else if (game.openCards.indexOf(cart.name) === -1) {
      dispatch(addCarts(cart.name));
    }
  } else {
    dispatch(addOpenCart(cart));
  }
};

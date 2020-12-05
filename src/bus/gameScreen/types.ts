export const START_GAME = "START_GAME";
export type startGame = {
  type: typeof START_GAME;
};

export const STOP_GAME = "STOP_GAME";
export type stopGame = {
  type: typeof STOP_GAME;
};

export const DISABLED_CART = "DISABLED_CART";
export type disabledCart = {
  type: typeof DISABLED_CART;
};

export const ADD_OPEN_CART = "ADD_OPEN_CART";
export type addOpenCart = {
  type: typeof ADD_OPEN_CART;
  payload: string;
};

export const ADD_OPEN_CARTS = "ADD_OPEN_CARTS";
export type addOpenCarts = {
  type: typeof ADD_OPEN_CARTS;
  payload: any;
};

export const ADD_CARTS = "ADD_CARTS";
export type addCarts = {
  type: typeof ADD_CARTS;
  payload: string[];
};

export const RESET_OPEN_CARTS = "RESET_OPEN_CARTS";
export type resetOpenCarts = {
  type: typeof RESET_OPEN_CARTS;
};

export const RESET_OPEN_CART = "RESET_OPEN_CART";
export type resetOpenCart = {
  type: typeof RESET_OPEN_CART;
};

export const UPDATE_OPEN_CART = "UPDATE_OPEN_CART";
export type updateOpenCart = {
  type: typeof UPDATE_OPEN_CART;
  payload: any;
};

export const UPDATE_WIN = "UPDATE_WIN";
export type updateWin = {
  type: typeof UPDATE_WIN;
};

export type actionGame =
  | updateWin
  | disabledCart
  | startGame
  | stopGame
  | updateOpenCart
  | addOpenCart
  | addOpenCarts
  | resetOpenCart
  | addCarts
  | resetOpenCarts;

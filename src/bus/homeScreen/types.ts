import { user } from "./homeReducer";

export const ADD_NAME = "ADD_NAME";
export type addName = {
  type: typeof ADD_NAME;
  payload: string;
};

export const ADD_TIME = "ADD_TIME";
export type addTime = {
  type: typeof ADD_TIME;
  payload: number;
};

export const ADD_USER = "ADD_USER";
export type addUser = {
  type: typeof ADD_USER;
  payload: user;
};

export const RESET_USER = "RESET_USER";
export type resetUser = {
  type: typeof RESET_USER;
};

export type homeAction = addName | addTime | addUser | resetUser;

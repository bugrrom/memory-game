import { ADD_NAME, ADD_TIME, ADD_USER, RESET_USER } from "./types";
import { user } from "./homeReducer";
import { Dispatch } from "redux";

export const addName = (name: string) => {
  return {
    type: ADD_NAME,
    payload: name,
  };
};

export const addTime = (time: number) => {
  return {
    type: ADD_TIME,
    payload: time,
  };
};

export const addUser = (user: user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const resetUser = () => {
  return {
    type: RESET_USER,
  };
};

export const addNewUser = () => (dispatch: Dispatch, getState: any) => {
  const { home } = getState();
  dispatch(
    addUser({
      name: home.name,
      time: home.time,
      id: Math.random(),
    })
  );
};

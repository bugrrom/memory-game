import { ADD_NAME, ADD_TIME, ADD_USER, homeAction, RESET_USER } from "./types";

export type user = {
  name: string;
  time: number;
  id: number;
};

type typeState = {
  name: string;
  time: number;
  allUsers: user[];
};

const initialState = {
  name: "",
  time: 0,
  allUsers: [],
};

export const homeScreen = (
  state: typeState = initialState,
  action: homeAction
) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case ADD_TIME: {
      return {
        ...state,
        time: action.payload,
      };
    }
    case ADD_USER:
      console.log(action)
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
      };
    case RESET_USER:
      return {
        ...state,
        name: "",
      };
    default:
      return state;
  }
};

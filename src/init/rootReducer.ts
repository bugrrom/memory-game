import { combineReducers } from "redux";
import { gameReducer } from "../bus/gameScreen/gameReducer";
import { homeScreen } from "../bus/homeScreen/homeReducer";
export const rootReducer = combineReducers({
  game: gameReducer,
  home: homeScreen,
});

export type AppState = ReturnType<typeof rootReducer>;

import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    gameManager: gameReducer,
    themeManager: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice, CreateSliceOptions } from "@reduxjs/toolkit";

export interface ThemeState {
  isDark: boolean;
}

const initialState: ThemeState = {
  isDark: false,
};

const storeSlice: CreateSliceOptions<
  ThemeState,
  {
    setTheme: (state: ThemeState, action: { payload: boolean }) => void;
  }
> = {
  name: "Theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.isDark = !state.isDark;
    },
  },
};
const themeSlice = createSlice(storeSlice);

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;

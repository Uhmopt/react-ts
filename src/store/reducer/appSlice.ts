import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

type InitialType = typeof initialState;

export const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setApp: (
      state,
      action: {
        payload:
          | Partial<InitialType>
          | ((curState: InitialType) => InitialType);
      }
    ) => {
      if (typeof action.payload === 'function') {
        return action.payload(state);
      }
      return { ...state, ...action.payload };
    },

    resetApp: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setApp, resetApp } = appSlice.actions;

export type AppState = ReturnType<typeof appSlice.getInitialState>;

const appReducer = appSlice.reducer;

export default appReducer;

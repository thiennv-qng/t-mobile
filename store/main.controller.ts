import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type CounterState = {
  counter: number;
};

const name = "main";
const initialState: CounterState = {
  counter: 0,
};

/**
 * Actions
 */

export const setCounter = createAsyncThunk<CounterState, void, { state: any }>(
  `${name}/setCounter`,
  async (_, { getState }) => {
    const {
      main: { counter },
    } = getState();
    return { counter: counter + 1 };
  }
);

const slice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    void builder.addCase(
      setCounter.fulfilled,
      (state, { payload }) => void Object.assign(state, payload)
    ),
});

export default slice.reducer;

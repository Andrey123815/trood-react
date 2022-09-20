import { createSlice } from '@reduxjs/toolkit';

export const PROGRESS_BAR_MODE = 'progressBar';
export const TABLE_COMPONENT_MODE = 'tableComponent';

const initialState = {
  value: PROGRESS_BAR_MODE
};

export const testcaseSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    switchMode: (state) => {
      state.value = state.value === PROGRESS_BAR_MODE ? TABLE_COMPONENT_MODE : PROGRESS_BAR_MODE;
    }
  },
});

export const { switchMode } = testcaseSlice.actions;

export const selectMode = (state) => state.modeSwitcher.value;

export default testcaseSlice.reducer;

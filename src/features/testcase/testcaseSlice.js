import { createSlice } from '@reduxjs/toolkit';
import {TableComponentTestCase} from "../../configurations/testConfigurations";

export const PROGRESS_BAR_MODE = 'progressBar';
export const TABLE_COMPONENT_MODE = 'tableComponent';

const initialState = {
  mode: PROGRESS_BAR_MODE,
  items: TableComponentTestCase.items,
  filters: TableComponentTestCase.filters,
  sort: ''
};

export const testcaseSlice = createSlice({
  name: 'testcase',
  initialState,
  reducers: {
    switchMode: (state) => {
      state.mode = state.mode === PROGRESS_BAR_MODE ? TABLE_COMPONENT_MODE : PROGRESS_BAR_MODE;
    },
    updateFilters: (state, action) => {
      state.filters.type = action.payload.type;
      state.filters.status = action.payload.status;
    },
    updateSortCell: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { switchMode, updateFilters, updateSortCell } = testcaseSlice.actions;

export const selectMode = (state) => state.testcaseSwitcher.mode;
export const selectSortCell = (state) => state.testcaseSwitcher.sort;
export const selectItems = (state) => state.testcaseSwitcher.items;
export const selectFilters = (state) =>
  ({type: state.testcaseSwitcher.filters.type, status: state.testcaseSwitcher.filters.status});

export default testcaseSlice.reducer;

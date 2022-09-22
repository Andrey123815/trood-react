import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import testcaseReducer from '../features/testcase/testcaseSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    testcaseSwitcher: testcaseReducer,
    // tableManager: tableReducer,
  },
});

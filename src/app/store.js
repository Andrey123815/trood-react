import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import testcaseReducer from '../features/mode/testcaseSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modeSwitcher: testcaseReducer
  },
});

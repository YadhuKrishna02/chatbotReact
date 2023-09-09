import { configureStore } from '@reduxjs/toolkit';
import dateAndTimeReducer from './DateAndTime/DateTime';
import nameReducer from './NameReducer/NameReducer';
import AgeReducer from './AgeReducer/AgeReducer';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {}
};

const persistedState = loadState();
export const store = configureStore({
  reducer: {
    dateAndTime: dateAndTimeReducer,
    nameInput: nameReducer,
    age: AgeReducer,
  },
  preloadedState: persistedState,
});
store.subscribe(() => {
  saveState(store.getState());
});

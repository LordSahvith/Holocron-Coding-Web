import { createSlice } from '@reduxjs/toolkit';

const loadingSliceDef = {
  name: 'loading',
  initialState: {
    value: {
      completed: true,
      successful: false,
    },
  },
  reducers: {
    loadingStarted: state => {
      state.value.completed = false;
    },
    loadingCompleted: state => {
      state.value.completed = true;
      state.value.successful = true;
    },
    loadingFailed: state => {
      state.value.completed = true;
      state.value.successful = false;
    },
  },
};

const loadingSlice = createSlice(loadingSliceDef);
const { loadingStarted, loadingCompleted, loadingFailed } =
  loadingSlice.actions;

export { loadingSlice };
export { loadingSliceDef, loadingStarted, loadingCompleted, loadingFailed };

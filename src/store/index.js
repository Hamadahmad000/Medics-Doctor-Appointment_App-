import {configureStore} from '@reduxjs/toolkit';
import bookDoctorReducer from './slices/OrderedSlice';

const store = configureStore({
  reducer: {
    bookDoctor: bookDoctorReducer,
  },
});

export default store;

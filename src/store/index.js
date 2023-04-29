import {configureStore} from '@reduxjs/toolkit';
import bookDoctorSlice from './slices/OrderedSlice';
import PharmacyMedicineSlice from './slices/PharmacySlice';
const store = configureStore({
  reducer: {
    bookDoctor: bookDoctorSlice,
    pharmacy: PharmacyMedicineSlice,
  },
});

export default store;

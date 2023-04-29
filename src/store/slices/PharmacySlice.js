import {createSlice} from '@reduxjs/toolkit';
const initialState = [];
const PharmacySlice = createSlice({
  name: 'Pharmacy',
  initialState,
  reducers: {
    AddToCart(state, action) {
      state.push(action.payload);
    },
    RemoveFromCart(state, action) {
      //   console.log(action.payload);
      return state.filter((val, index) => index !== action.payload);
    },
  },
});
const PharmacyMedicineSlice = PharmacySlice.reducer;
export default PharmacyMedicineSlice;
export const {AddToCart, RemoveFromCart} = PharmacySlice.actions;

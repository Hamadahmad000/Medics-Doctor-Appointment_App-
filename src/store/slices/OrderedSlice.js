// import {createSlice} from '@reduxjs/toolkit';

// const OrderSlice = createSlice({
//   name: 'Doctor',
//   initialState: [],
//   reducers: {
//     bookDoctor(state, action) {
//       console.log('Working2');
//       // console.log(state.payload);
//       return [...state, action.payload];
//     },
//   },
// });

// export default OrderSlice.reducer;

// export const {bookDoctor} = OrderSlice.actions;

import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    bookDoctor(state, action) {
      state.push(action.payload);
    },
    cancelDoctor(state, action) {
      console.log(state);
    },
  },
  // extraReducers(building) {
  //   building.addCase(userSlice.actions.DeleteUser, () => {
  //     return [];
  //   });
  // },
});

const bookDoctorSlice = userSlice.reducer;
export default bookDoctorSlice;

export const {bookDoctor, cancelDoctor} = userSlice.actions;

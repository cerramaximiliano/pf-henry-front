import { createSlice } from '@reduxjs/toolkit';

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: [],
    isLoading: false,
  },
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setReviews, startLoading, stopLoading } = reviewsSlice.actions;

const reviewsReducer = reviewsSlice.reducer;
export default reviewsReducer;
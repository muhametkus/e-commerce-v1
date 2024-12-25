import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface productState {
  data: string[];
  loading: boolean;
}

const initialState: productState = {
  data: [],
  loading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
    },
    fetchDataSuccess(state, action: PayloadAction<string[]>) {
      state.data = action.payload;
      state.loading = false;
    },
    fetchDataFailure(state) {
      state.loading = false;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = productSlice.actions;

export default productSlice.reducer;

'use client';
import { AppDispatch } from '@/redux/store';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from '@/redux/productSlice';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchProductData = () => async (dispatch: AppDispatch) => {
  dispatch(fetchDataStart());
  try {
    if (!API_URL) {
      throw new Error('API_URL is not defined');
    }
    const response = await fetch(API_URL);
    const data = await response.json();
    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataFailure());
  }
};

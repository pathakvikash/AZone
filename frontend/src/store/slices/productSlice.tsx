import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productsData: [],
  filteredProducts: [],
  searchQuery: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsData: (state, action) => {
      state.productsData = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
});

export const { setProductsData, setSearchQuery, setFilteredProducts } =
  productSlice.actions;

export default productSlice.reducer;

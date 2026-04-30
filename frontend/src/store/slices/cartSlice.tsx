import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  productsNumber: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: any, action: any): void => {
      const addProductExists = state.products.find(
        (product: any) => product.id === action.payload.id
      );
      const qtyRaw = action.payload?.quantity ?? 1;
      const qty = Number.isNaN(Number.parseInt(String(qtyRaw)))
        ? 1
        : Number.parseInt(String(qtyRaw));

      if (addProductExists) {
        addProductExists.quantity = (addProductExists.quantity || 0) + qty;
      } else {
        state.products.push({
          ...action.payload,
          quantity: qty,
        });
      }
      state.productsNumber = (state.productsNumber || 0) + qty;
    },
    removeFromCart: (state: any, action: any) => {
      // find the product removing the array
      const productToRemove = state.products.find(
        (product: any) => product.id === action.payload
      );
      // remove the quantity from product number
      state.productsNumber = state.productsNumber - productToRemove.quantity;
      // find index of the product removing
      const index = state.products.findIndex(
        (product: any) => product.id === action.payload
      );
      // remove from the array
      state.products.splice(index, 1);
    },
    incrementInCart: (state: any, action: any) => {
      const itemInc = state.products.find(
        (item: any) => item.id === action.payload
      );
      if (itemInc.quantity >= 1) {
        itemInc.quantity = itemInc.quantity + 1;
      }
      state.productsNumber = state.productsNumber + 1;
    },
    decrementInCart: (state: any, action: any) => {
      const itemDec = state.products.find(
        (item: any) => item.id === action.payload
      );
      if (itemDec.quantity === 1) {
        const index = state.products.findIndex(
          (item: any) => item.id === action.payload
        );
        state.products.splice(index, 1);
      } else {
        itemDec.quantity--;
      }
      state.productsNumber = state.productsNumber - 1;
    },
  },
});

export const { addToCart, removeFromCart, incrementInCart, decrementInCart } =
  cartSlice.actions;
export default cartSlice.reducer;

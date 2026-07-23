import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  productsNumber: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    hydrateCart: (_state: any, action: PayloadAction<any>) => {
      return action.payload;
    },
    addToCart: (state: any, action: PayloadAction<any>): void => {
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
    removeFromCart: (state: any, action: PayloadAction<any>) => {
      const index = state.products.findIndex(
        (product: any) => product.id === action.payload
      );
      if (index === -1) return;
      state.productsNumber = Math.max(
        0,
        state.productsNumber - (state.products[index].quantity || 0)
      );
      state.products.splice(index, 1);
    },
    incrementInCart: (state: any, action: PayloadAction<any>) => {
      const itemInc = state.products.find(
        (item: any) => item.id === action.payload
      );
      if (!itemInc) return;
      itemInc.quantity = (itemInc.quantity || 0) + 1;
      state.productsNumber = state.productsNumber + 1;
    },
    decrementInCart: (state: any, action: PayloadAction<any>) => {
      const itemDec = state.products.find(
        (item: any) => item.id === action.payload
      );
      if (!itemDec) return;
      if (itemDec.quantity <= 1) {
        const index = state.products.findIndex(
          (item: any) => item.id === action.payload
        );
        state.products.splice(index, 1);
      } else {
        itemDec.quantity--;
      }
      state.productsNumber = Math.max(0, state.productsNumber - 1);
    },
  },
});

export const {
  hydrateCart,
  addToCart,
  removeFromCart,
  incrementInCart,
  decrementInCart,
} = cartSlice.actions;
export default cartSlice.reducer;

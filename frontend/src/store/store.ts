import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';

export const CART_STORAGE_KEY = 'azone_cart';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
  devTools: true,
});

// Persist the cart so it survives reloads. Hydration happens client-side
// (see Providers) to avoid SSR markup mismatches.
if (typeof window !== 'undefined') {
  store.subscribe(() => {
    try {
      window.localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(store.getState().cart)
      );
    } catch {
      // ignore write failures (private mode / quota)
    }
  });
}

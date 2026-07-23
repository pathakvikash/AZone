'use client';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, CART_STORAGE_KEY } from '@/store/store';
import { hydrateCart } from '@/store/slices/cartSlice';
import {
  setProductsData,
  setFilteredProducts,
} from '@/store/slices/productSlice';

const Providers = ({
  children,
  initialProducts = [],
}: {
  children: React.ReactNode;
  initialProducts?: any[];
}) => {
  useEffect(() => {
    // Hydrate the cart BEFORE seeding products: any dispatch fires the store
    // subscriber that persists the cart, which would clobber the saved cart
    // in localStorage before we get a chance to read it back.
    try {
      const raw = window.localStorage.getItem(CART_STORAGE_KEY);
      if (raw) store.dispatch(hydrateCart(JSON.parse(raw)));
    } catch {
      // ignore malformed/unavailable storage
    }
    // Seed product data app-wide so search and category nav work on every page.
    if (initialProducts.length) {
      store.dispatch(setProductsData(initialProducts));
      store.dispatch(setFilteredProducts(initialProducts));
    }
    // initialProducts is stable per load; seed once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Provider store={store}>{children}</Provider>;
};

export default Providers;

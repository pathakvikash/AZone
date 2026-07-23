'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaStar } from 'react-icons/fa';

import { addToCart } from '@/store/slices/cartSlice';

const Product = ({ product }: any) => {
  const { name, category, price, image_url, description } = product;
  const dispatch = useDispatch();
  const stars = [];

  for (let i = 0; i < product.rating; i++) {
    stars.push(<FaStar color={'#fbbf24'} key={i} />);
  }

  const addItemToBasket = () => {
    dispatch(addToCart({ ...product, quantity: product?.quantity ?? 1 }));
  };
  return (
    <div className='glass glass-hover w-full flex flex-col overflow-hidden group'>
      <Link href={`/products/${product.id}`} className='flex flex-col flex-grow'>
        <div className='relative w-full h-48 bg-white/5 rounded-t-2xl overflow-hidden'>
          <Image
            src={image_url}
            alt={name}
            fill
            sizes='(max-width: 768px) 100vw, 350px'
            className='object-contain transition-transform duration-500 group-hover:scale-105'
          />
        </div>
        <div className='p-4 flex-col gap-2 flex flex-grow'>
          <div className='font-semibold text-white text-sm line-clamp-2'>{name}</div>
          <p className='text-amber-400/80 text-xs uppercase tracking-wide'>{category}</p>
          <div className='flex gap-0.5'>{stars}</div>
          <div className='text-white/60 text-sm line-clamp-2'>{description}</div>
          <p className='text-amber-400 text-lg font-bold mt-auto'>{'₹' + price}</p>
        </div>
      </Link>
      <button
        onClick={addItemToBasket}
        className='neon-btn m-4 mt-0'
      >
        Add to Basket
      </button>
    </div>
  );
};

const ProductList = ({ initialProducts = [] }: { initialProducts?: any[] }) => {
  const [mounted, setMounted] = useState(false);
  const filterProducts = useSelector(
    (state: any) => state.products.filteredProducts
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  // Server + first paint render the server-provided list (SSR content);
  // after mount we read the store so search/filters (seeded in Providers) drive it.
  const display = mounted ? filterProducts : initialProducts;

  if (mounted && !display?.length) {
    return (
      <div className='flex-grow flex items-center justify-center py-20 text-white/50'>
        No products match your filters.
      </div>
    );
  }

  return (
    <div className='grid flex-grow gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {display.map((product: any) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

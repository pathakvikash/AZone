'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState, useEffect, useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { setFilteredProducts } from '@/store/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('All');
  const allProducts = useSelector((state: any) => state.products.productsData);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const filtered = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    return allProducts.filter((product: any) => {
      const matchesText =
        query === '' || product.name.toLowerCase().includes(query);
      const matchesCategory =
        category === 'All' ||
        product.category?.toLowerCase() === category.toLowerCase();
      return matchesText && matchesCategory;
    });
  }, [allProducts, searchText, category]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setFilteredProducts(filtered));
    }, 250);
    return () => clearTimeout(timeout);
  }, [filtered, dispatch]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setFilteredProducts(filtered));
    if (pathname !== '/products') router.push('/products');
  };

  return (
    <form onSubmit={onSubmit} className='w-full'>
      <div className='flex items-center h-11 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/15 overflow-hidden focus-within:border-amber-400/60 focus-within:ring-2 focus-within:ring-amber-400/30 transition-all'>
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className='h-full pl-3 pr-2 bg-transparent text-white/80 text-xs xl:text-sm border-r border-white/10 focus:outline-none cursor-pointer [&>option]:text-black'
        >
          <option value='All'>All</option>
          <option value='electronics'>Electronics</option>
          <option value='clothing'>Clothing</option>
          <option value='books'>Books</option>
          <option value='Mobiles'>Mobiles</option>
          <option value='Computers'>Computers</option>
          <option value='Home'>Home</option>
          <option value='Fashion'>Fashion</option>
        </select>
        <input
          type='text'
          placeholder='Search for something'
          aria-label='Search products'
          className='flex-grow h-full px-3 bg-transparent text-white placeholder:text-white/40 focus:outline-none'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type='submit'
          aria-label='Search'
          className='h-full w-12 flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 transition-all'
        >
          <MagnifyingGlassIcon className='h-6 w-6 stroke-white' />
        </button>
      </div>
    </form>
  );
};

export default Search;

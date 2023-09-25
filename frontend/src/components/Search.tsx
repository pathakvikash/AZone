'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { setFilteredProducts } from '@/store/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';

interface SearchState {
  searchCategory: string;
  searchText: string;
}

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const Allproducts = useSelector((state: any) => state.products.productsData);

  const [searchState, setSearchState] = useState<SearchState>({
    searchCategory: '',
    searchText: '',
  });

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchState({
      ...searchState,
      searchText: event.target.value,
    });
    handleSearch();
  };
  const router = useRouter(); // Use the useRouter hook to access the router object
  const dispatch = useDispatch();
  const handleSearch = () => {
    const filterBySearch = Allproducts.filter((product: any) =>
      product.name.toLowerCase().includes(searchState.searchText.toLowerCase())
    );

    dispatch(setFilteredProducts(filterBySearch));
  };

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filterBySearch = Allproducts.filter((product: any) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    dispatch(setFilteredProducts(filterBySearch));

    if (searchTerm.trim() !== '') {
      router.push(`/search?category=${category}&searchTerm=${searchTerm}`);
    }

    setSearchTerm('');
    setCategory('All');
  };

  const handleSearchCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCategory = event.target.value;
    setSearchState((prevState) => ({
      ...prevState,
      searchCategory: selectedCategory,
    }));
  };

  return (
    <div className='w-[100%]'>
      <div className='flex items-center h-10 bg-amazonclone-yellow rounded'>
        <select
          onChange={(e) => handleSearchCategoryChange(e)}
          value={searchState.searchCategory || 'All'}
          className='p-2 bg-gray-300 text-black border text-xs xl:text-sm'
        >
          <option>All</option>
          <option>Deals</option>
          <option value='electronics'>Electronics</option>
          <option value='clothing'>Clothing</option>
          <option value='books'>Books</option>
          <option>Amazon</option>
          <option>Fashion</option>
          <option>Computers</option>
          <option>Home</option>
          <option>Mobiles</option>
        </select>
        <input
          type='text'
          placeholder='Search for something'
          className='flex-grow items-center h-[100%] rounded-l text-black'
          value={searchState.searchText}
          onChange={handleSearchTextChange}
        />
        <button onClick={() => onHandleSubmit} className='w-[45px]'>
          <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900' />
        </button>
      </div>
      {loading && <div>Loading...</div>}
      {/* {error && <div>Error: {error.message}</div>} */}
    </div>
  );
};

export default Search;

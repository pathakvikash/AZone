'use client';
import { useSelector, useDispatch } from 'react-redux';
import { baseUrl } from '@/constant';
import React, { useState } from 'react';
import {
  FaUser,
  FaArrowRight,
  FaArrowLeft,
  FaSearch,
  FaLocationArrow,
  FaShoppingCart,
} from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { useAppData } from '@/hooks/useAppData';
import axios from 'axios';
import Link from 'next/link';
import { setFilteredProducts } from '@/store/slices/productSlice';

interface SearchState {
  searchCategory: string;
  searchText: string;
}

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showDeliveryOptions, setShowDeliveryOptions] = useState(false);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [searchState, setSearchState] = useState<SearchState>({
    searchCategory: '',
    searchText: '',
  });
  const dispatch = useDispatch();

  const Allproducts = useSelector((state: any) => state.products.productsData);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleOptions = (
    state: boolean,
    setState: (state: boolean) => void
  ) => {
    setState(!state);
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

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchState({
      ...searchState,
      searchText: event.target.value,
    });
    handleSearch();
  };

  const handleSearch = () => {
    const filterBySearch = Allproducts.filter((product: any) =>
      product.name.toLowerCase().includes(searchState.searchText.toLowerCase())
    );

    dispatch(setFilteredProducts(filterBySearch));
  };

  return (
    <div>
      <nav
        className={`z-10 w-full items-center justify-between font-mono text-sm lg:flex ${
          darkMode ? 'dark' : ''
        }`}
      >
        <div className='flex items-center justify-between w-full p-4 bg-white dark:bg-gray-900'>
          <div className='flex gap-3'>
            <Link href='/'>
              <img
                src={'/logo.png'}
                alt=''
                className='w-9 h-9 rounded-3xl border-2 border-gray-400'
              />
            </Link>
            <button
              className='text-gray-600 flex items-center gap-3 dark:text-gray-400 mr-4'
              onClick={() =>
                toggleOptions(showDeliveryOptions, setShowDeliveryOptions)
              }
            >
              <FaLocationArrow />
              Delivery
            </button>
            {showDeliveryOptions && (
              <div>
                <input
                  type='text'
                  placeholder='Enter Address or Zip Code'
                  className='px-2 py-1 rounded-md text-gray-600 dark:text-gray-400'
                />
                <button className='bg-blue-500 text-white px-2 py-1 rounded-md ml-2'>
                  Confirm
                </button>
              </div>
            )}
          </div>
          <div className='relative flex items-center'>
            <div className='flex bg-white rounded-md'>
              <select
                className='px-2 py-1 w-full sm:w-min rounded-md text-gray-600 dark:text-gray-400'
                onChange={(event) => handleSearchCategoryChange(event)}
                value={searchState.searchCategory || 'All'}
              >
                <option value=''>All</option>
                <option value='electronics'>Electronics</option>
                <option value='clothing'>Clothing</option>
                <option value='books'>Books</option>
              </select>

              <input
                type='text'
                placeholder='Search for something'
                className='px-2 py-1 w-min sm:w-max text-gray-600 dark:text-gray-400 ml-2'
                value={searchState.searchText}
                onChange={handleSearchTextChange}
              />
              <button
                className='focus:outline-none hover:focus:border-[#ff9900] outline-none border-[3px] rounded-md bg-[#ff9900] border-[#ff9900] rounded-l-xy py-2 px-4 p-3'
                onClick={handleSearch}
              >
                <AiOutlineSearch className='text-gray-600 text-xl dark:text-gray-200' />
              </button>
            </div>
          </div>

          <div className='flex items-center'>
            <button
              className='text-gray-600 dark:text-gray-400 ml-4'
              onClick={() =>
                toggleOptions(showLanguageOptions, setShowLanguageOptions)
              }
            >
              Language
            </button>
            <a
              href='/products'
              className='text-gray-600 dark:text-gray-400 ml-4'
            >
              Products
            </a>
            {showLanguageOptions && (
              <div>
                <button className='text-gray-600 dark:text-gray-400 ml-4'>
                  English
                </button>
                <button className='text-gray-600 dark:text-gray-400 ml-4'>
                  Spanish
                </button>
              </div>
            )}
            <button className='text-gray-600 dark:text-gray-400 ml-4'>
              Order
            </button>
            <Link href='/cart'>
              <button className='text-gray-600 dark:text-gray-400 ml-4'>
                <FaShoppingCart />
                <span className='absolute w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center'>
                  0
                </span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <HMenu />
    </div>
  );
};
const HMenu = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const Allproducts = useSelector((state: any) => state.products.productsData);
  const allCategories = Allproducts.map((product: any) => product.category);
  const uniqueCategories = new Set(allCategories);
  let filteredCategories = Array.from(uniqueCategories);

  const toggleSidebar = () => {
    console.log(isSidebarOpen, 'isSidebarOpen');
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className='bg-gray-700 p-4 text-white'>
      <div className='flex items-center justify-between'>
        <button
          className='text-white text-2xl flex gap-2 items-center cursor-pointer'
          onClick={toggleSidebar}
        >
          &#9776;
          <div className='text-white text-xl'>H Menu</div>
        </button>
        <div className='hidden md:block'>
          {filteredCategories.map((category: any) => {
            return (
              <button key={category} className='text-white gap-3 mr-4'>
                {category}
              </button>
            );
          })}
        </div>
      </div>
      {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
    </nav>
  );
};

const Sidebar: React.FC<{ toggleSidebar: () => void }> = ({
  toggleSidebar,
}) => {
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // Define an array to store the text for each item
  const menuItems: { [key: string]: string }[] = [
    {
      label: 'Digital Content & Devices',
      text: 'Text for Digital Content & Devices',
    },
    { label: 'Shop By Department', text: 'Text for Shop By Department' },
    { label: 'Programs & Features', text: 'Text for Programs & Features' },
    { label: 'Help & Settings', text: 'Text for Help & Settings' },
  ];

  const handleItemClick = (item: string) => {
    if (expandedItems.includes(item)) {
      setExpandedItems((prevItems) =>
        prevItems.filter((prevItem) => prevItem !== item)
      );
    } else {
      setExpandedItems([item]);
    }
    setSelectedItem(item);
  };

  const handleBackButtonClick = () => {
    setSelectedItem('');
    setExpandedItems([]);
  };

  const renderBackButton = () => {
    if (selectedItem !== '') {
      return (
        <div className='flex gap-2'>
          <button
            className='text-white text-xl cursor-pointer'
            onClick={handleBackButtonClick}
          >
            <FaArrowLeft />
          </button>
          Main Menu
        </div>
      );
    }
    return null;
  };

  return (
    <div className='fixed z-10 top-0 left-0 w-64 h-screen bg-black text-white p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl flex gap-2 font-semibold'>
          <FaUser /> Hello, Sign In
        </h2>
        <button
          className='text-white text-xl cursor-pointer'
          onClick={toggleSidebar}
        >
          &#x2715;
        </button>
      </div>
      <div className='flex'>{renderBackButton()}</div>
      <ul>
        {selectedItem === '' ? (
          <>
            {menuItems.map((menuItem, index) => (
              <li
                key={index}
                className={`mb-2 ${
                  selectedItem === menuItem.label
                    ? 'bg-gray-600'
                    : 'hover:bg-gray-600'
                }`}
              >
                <a
                  href='#'
                  className='block text-white p-2'
                  onClick={() => handleItemClick(menuItem.label)}
                >
                  {menuItem.label}{' '}
                  {expandedItems.includes(menuItem.label) ? (
                    <FaArrowLeft className='inline-block ml-1' />
                  ) : (
                    <FaArrowRight className='inline-block ml-1' />
                  )}
                </a>
              </li>
            ))}
          </>
        ) : (
          <>
            {selectedItem && (
              <li className='mb-2'>
                <h3 className='text-white'>{selectedItem}</h3>
                <p className='text-sm text-gray-400'>
                  {
                    menuItems.find(
                      (menuItem) => menuItem.label === selectedItem
                    )?.text
                  }
                </p>
              </li>
            )}
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;

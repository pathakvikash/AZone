'use client';
import Search from './Search';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useSelector, useDispatch } from 'react-redux';
import { BASE_URL } from '@/utils/constant';
import React, { useState } from 'react';
import { FaUser, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import amazon from '../../public/amazon.png';
const Navbar = () => {
  const cart = useSelector((state: any) => state.cart.productsNumber);
  return (
    <div>
      <header className='min-w-[1000px] '>
        <div className='flex  bg-amazonclone text-white h-[60px]'>
          <div className='flex items-center m-4'>
            <Link href={'/'}>
              <img
                className='h-[35px] w-[100px] m-2'
                src={`${amazon.src}`}
                alt='Amazon logo'
              />
            </Link>
            <div className='pr-4 pl-4'>
              <div className='text-xs xl:text-sm'>Deliver to</div>
              <div className='text-sm xl:text-base font-bold'>India</div>
            </div>
          </div>
          <div className='flex grow relative items-center'>
            <Search />
          </div>
          <div className='flex items-center m-4'>
            <div className='pr-4 pl-4'>
              <div className='text-xs xl:text-sm'>Hello, sign in</div>
              <div className='text-sm xl:text-base font-bold'>
                Accounts & Lists
              </div>
            </div>
            <div className='pr-4 pl-4'>
              <div className='text-xs xl:text-sm'>Returns</div>
              <div className='text-sm xl:text-base font-bold'>& Orders</div>
            </div>
            <div className='pr-4 pl-4'>
              <div className='text-xs xl:text-sm'>Filter</div>
              <div className='text-sm xl:text-base font-bold'>
                <Link href={'/products'}>Products</Link>
              </div>
            </div>
            <Link href={'/cart'}>
              <div className='flex pr-3 pl-3'>
                <ShoppingCartIcon className='h-[48px]' />
                <div className='relative'>
                  <div className='absolute right-[9px] font-bold m-2 text-orange-400'>
                    {cart}
                  </div>
                </div>
                <div className='mt-7 text-xs xl:text-sm font-bold'>Cart</div>
              </div>
            </Link>
          </div>
        </div>
        <div className='flex  bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6'>
          <HMenu />
        </div>
      </header>
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
    <nav className=' p-1 text-white'>
      <div className='flex gap-2 items-center justify-between'>
        <button
          className='text-white text-2xl flex gap-2 items-center cursor-pointer'
          onClick={toggleSidebar}
        >
          &#9776;
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

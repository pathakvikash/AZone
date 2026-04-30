'use client';
import Search from './Search';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { FaUser, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import amazon from '../../public/amazon.png';

const Navbar = () => {
  const cart = useSelector((state: any) => state.cart.productsNumber);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="flex bg-primary text-white h-auto md:h-[60px] items-center flex-wrap md:flex-nowrap px-2 md:px-4 py-2 md:py-0">
        <div className="flex items-center gap-2 md:gap-0">
          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 hover:bg-primary-800 rounded-md transition-colors"
              aria-label="Open menu"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          )}
          <Link href={'/'} className="flex items-center">
            <img
              className="h-8 w-20 md:h-[35px] md:w-[100px] object-contain"
              src={`${amazon.src}`}
              alt="Amazon logo"
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center ml-2 xl:ml-4">
          <div className="pr-2 xl:pr-4">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">India</div>
          </div>
        </div>

        <div className="flex-grow hidden md:block mx-2 lg:mx-4">
          <Search />
        </div>

        <div className="flex items-center gap-1 md:gap-2 lg:gap-4 ml-auto">
          <div className="hidden lg:block pr-2 xl:pr-4 cursor-pointer hover:border border-white rounded px-2 py-1">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold">Accounts & Lists</div>
          </div>

          <div className="hidden lg:block pr-2 xl:pr-4 cursor-pointer hover:border border-white rounded px-2 py-1">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>

          <div className="hidden xl:block pr-2 xl:pr-4 cursor-pointer hover:border border-white rounded px-2 py-1">
            <div className="text-xs xl:text-sm">Filter</div>
            <div className="text-sm xl:text-base font-bold">
              <Link href={'/products'}>Products</Link>
            </div>
          </div>

          <Link href={'/cart'}>
            <div className="flex items-center pr-1 xl:pr-3 cursor-pointer hover:border border-white rounded px-2 py-1">
              <div className="relative">
                <ShoppingCartIcon className="h-8 w-8 md:h-[48px]" />
                <div className="absolute -top-1 right-0 font-bold text-orange-400 text-sm">
                  {cart}
                </div>
              </div>
              <span className="hidden xl:block mt-4 text-sm font-bold">Cart</span>
            </div>
          </Link>
        </div>
      </div>

      {isMobile && (
        <div className="px-2 pb-2 bg-primary">
          <Search />
        </div>
      )}

      <div className="hidden md:flex bg-secondary text-white space-x-3 text-xs xl:text-sm p-2 pl-4 lg:pl-6 overflow-x-auto scrollbar-hide">
        <HMenu />
      </div>

      <MobileDrawer 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
};

const HMenu = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const Allproducts = useSelector((state: any) => state.products.productsData);
  const allCategories = Allproducts.map((product: any) => product.category);
  const uniqueCategories = new Set(allCategories);
  let filteredCategories = Array.from(uniqueCategories);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        className="text-white text-lg flex gap-2 items-center cursor-pointer whitespace-nowrap hover:border border-white rounded px-2 py-1"
        onClick={toggleSidebar}
      >
        <span>☰</span>
        <span className="hidden lg:inline">All</span>
      </button>
      {filteredCategories.map((category: any) => (
        <button 
          key={category} 
          className="text-white whitespace-nowrap hover:border border-white rounded px-2 py-1 transition-colors"
        >
          {category}
        </button>
      ))}
      {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
    </>
  );
};

const Sidebar: React.FC<{ toggleSidebar: () => void }> = ({ toggleSidebar }) => {
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const menuItems: { [key: string]: string }[] = [
    { label: 'Digital Content & Devices', text: 'Text for Digital Content & Devices' },
    { label: 'Shop By Department', text: 'Text for Shop By Department' },
    { label: 'Programs & Features', text: 'Text for Programs & Features' },
    { label: 'Help & Settings', text: 'Text for Help & Settings' },
  ];

  const handleItemClick = (item: string) => {
    if (expandedItems.includes(item)) {
      setExpandedItems((prevItems) => prevItems.filter((prevItem) => prevItem !== item));
    } else {
      setExpandedItems([item]);
    }
    setSelectedItem(item);
  };

  const handleBackButtonClick = () => {
    setSelectedItem('');
    setExpandedItems([]);
  };

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={toggleSidebar}
      />
      
      {/* Sidebar */}
      <div className="absolute top-0 left-0 w-72 md:w-80 h-full bg-primary text-white overflow-y-auto animate-slide-in-left">
        <div className="flex justify-between items-center p-4 bg-primary-800">
          <h2 className="text-xl flex gap-2 font-semibold">
            <FaUser /> Hello, Sign In
          </h2>
          <button
            className="text-white text-xl cursor-pointer p-1 hover:bg-primary-700 rounded"
            onClick={toggleSidebar}
            aria-label="Close menu"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4">
          {selectedItem !== '' && (
            <button
              className="flex items-center gap-2 text-white mb-4 hover:text-accent"
              onClick={handleBackButtonClick}
            >
              <FaArrowLeft /> Back to Main Menu
            </button>
          )}
          
          <ul>
            {selectedItem === '' ? (
              menuItems.map((menuItem, index) => (
                <li key={index} className="mb-1">
                  <button
                    className="w-full text-left text-white p-2 hover:bg-primary-700 rounded transition-colors flex justify-between items-center"
                    onClick={() => handleItemClick(menuItem.label)}
                  >
                    {menuItem.label}
                    <FaArrowRight className="text-xs" />
                  </button>
                </li>
              ))
            ) : (
              <li>
                <h3 className="text-white font-semibold p-2">{selectedItem}</h3>
                <p className="text-gray-300 p-2 text-sm">{menuItems.find(m => m.label === selectedItem)?.text}</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};


const MobileDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [selectedItem, setSelectedItem] = useState<string>('');
  
  const menuItems = [
    { label: 'Digital Content & Devices', icon: '📱' },
    { label: 'Shop By Department', icon: '🛒' },
    { label: 'Programs & Features', icon: '⭐' },
    { label: 'Help & Settings', icon: '❓' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] lg:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 animate-fade-in"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="absolute top-0 left-0 w-80 max-w-[85vw] h-full bg-white text-primary animate-slide-in-left">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-secondary text-white">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <FaUser /> Menu
          </h2>
          <button
            className="p-1 hover:bg-primary-700 rounded"
            onClick={onClose}
            aria-label="Close menu"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="py-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 border-b border-gray-100 flex items-center gap-3"
              onClick={() => setSelectedItem(item.label)}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
          
          {/* Quick Links */}
          <div className="mt-4 px-4">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">Quick Links</h3>
            <Link 
              href="/products" 
              className="block py-2 text-blue-600 hover:text-blue-800 hover:underline"
              onClick={onClose}
            >
              All Products
            </Link>
            <Link 
              href="/cart" 
              className="block py-2 text-blue-600 hover:text-blue-800 hover:underline"
              onClick={onClose}
            >
              Your Cart ({0})
            </Link>
            <Link 
              href="/orders" 
              className="block py-2 text-blue-600 hover:text-blue-800 hover:underline"
              onClick={onClose}
            >
              Your Orders
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

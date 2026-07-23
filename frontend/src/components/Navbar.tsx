'use client';
import Search from './Search';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import React, { useState, useEffect, useMemo } from 'react';
import { FaUser, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const Wordmark = ({ className = '' }: { className?: string }) => (
  <span
    className={`font-extrabold tracking-tight bg-gradient-to-r from-yellow-300 via-orange-400 to-amber-500 bg-clip-text text-transparent select-none ${className}`}
  >
    AZone
  </span>
);

const Navbar = () => {
  const cart = useSelector((state: any) => state.cart.productsNumber);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
      <div className="flex bg-ink-900/80 backdrop-blur-xl border-b border-white/10 text-white h-auto md:h-[64px] items-center flex-wrap md:flex-nowrap px-2 md:px-4 py-2 md:py-0">
        <div className="flex items-center gap-2 md:gap-0">
          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          )}
          <Link href={'/'} className="flex items-center px-1">
            <Wordmark className="text-2xl md:text-3xl" />
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
          <div className="hidden lg:block pr-2 xl:pr-4 cursor-pointer hover:bg-white/10 rounded-lg px-2 py-1 transition-colors">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold">Accounts & Lists</div>
          </div>

          <div className="hidden lg:block pr-2 xl:pr-4 cursor-pointer hover:bg-white/10 rounded-lg px-2 py-1 transition-colors">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>

          <div className="hidden xl:block pr-2 xl:pr-4 cursor-pointer hover:bg-white/10 rounded-lg px-2 py-1 transition-colors">
            <div className="text-xs xl:text-sm">Filter</div>
            <div className="text-sm xl:text-base font-bold">
              <Link href={'/products'}>Products</Link>
            </div>
          </div>

          <Link href={'/cart'}>
            <div className="flex items-center pr-1 xl:pr-3 cursor-pointer hover:bg-white/10 rounded-lg px-2 py-1 transition-colors">
              <div className="relative">
                <ShoppingCartIcon className="h-8 w-8 md:h-[48px]" />
                {cart > 0 && (
                  <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-400 text-xs font-bold text-white">
                    {cart}
                  </div>
                )}
              </div>
              <span className="hidden xl:block mt-4 text-sm font-bold">Cart</span>
            </div>
          </Link>
        </div>
      </div>

      {isMobile && (
        <div className="px-2 pb-2 bg-ink-900/80 backdrop-blur-xl border-b border-white/10">
          <Search />
        </div>
      )}

      <div className="hidden md:flex bg-ink-800/70 backdrop-blur-xl border-b border-white/10 text-white/80 space-x-2 text-xs xl:text-sm p-2 pl-4 lg:pl-6 overflow-x-auto scrollbar-hide">
        <HMenu onOpenSidebar={() => setIsSidebarOpen(true)} />
      </div>

      {isSidebarOpen && <Sidebar toggleSidebar={() => setIsSidebarOpen(false)} />}

      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        cartCount={cart}
      />
    </header>
  );
};

const HMenu = ({ onOpenSidebar }: { onOpenSidebar: () => void }) => {
  const Allproducts = useSelector((state: any) => state.products.productsData);
  const filteredCategories = useMemo(
    () =>
      Array.from(
        new Set(Allproducts.map((product: any) => product.category))
      ) as string[],
    [Allproducts]
  );

  return (
    <>
      <button
        className="text-white text-lg flex gap-2 items-center cursor-pointer whitespace-nowrap hover:bg-white/10 hover:text-white rounded-lg px-2 py-1"
        onClick={onOpenSidebar}
      >
        <span>☰</span>
        <span className="hidden lg:inline">All</span>
      </button>
      {filteredCategories.map((category: any) => (
        <button
          key={category}
          className="text-white whitespace-nowrap hover:bg-white/10 hover:text-white rounded-lg px-2 py-1 transition-colors"
        >
          {category}
        </button>
      ))}
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
      <div className="absolute top-0 left-0 w-72 md:w-80 h-full bg-ink-900/95 backdrop-blur-2xl border-r border-white/10 text-white overflow-y-auto animate-slide-in-left">
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h2 className="text-xl flex gap-2 font-semibold items-center">
            <FaUser className="text-amber-400" /> Hello, Sign In
          </h2>
          <button
            className="text-white p-1 hover:bg-white/10 rounded-lg transition-colors"
            onClick={toggleSidebar}
            aria-label="Close menu"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4">
          {selectedItem !== '' && (
            <button
              className="flex items-center gap-2 text-amber-400 mb-4 hover:text-amber-300 transition-colors"
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
                    className="w-full text-left text-white p-2 hover:bg-white/10 rounded-lg transition-colors flex justify-between items-center"
                    onClick={() => handleItemClick(menuItem.label)}
                  >
                    {menuItem.label}
                    <FaArrowRight className="text-xs text-white/40" />
                  </button>
                </li>
              ))
            ) : (
              <li>
                <h3 className="text-white font-semibold p-2">{selectedItem}</h3>
                <p className="text-white/60 p-2 text-sm">{menuItems.find(m => m.label === selectedItem)?.text}</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};


const MobileDrawer: React.FC<{ isOpen: boolean; onClose: () => void; cartCount: number }> = ({ isOpen, onClose, cartCount }) => {
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
      <div className="absolute top-0 left-0 w-80 max-w-[85vw] h-full bg-ink-900/95 backdrop-blur-2xl border-r border-white/10 text-white animate-slide-in-left">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <FaUser className="text-amber-400" /> <Wordmark className="text-xl" />
          </h2>
          <button
            className="p-1 hover:bg-white/10 rounded-lg transition-colors"
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
              className="w-full text-left px-4 py-3 hover:bg-white/5 border-b border-white/5 flex items-center gap-3 transition-colors"
              onClick={() => setSelectedItem(item.label)}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}

          {/* Quick Links */}
          <div className="mt-4 px-4">
            <h3 className="text-sm font-semibold text-white/50 mb-2">Quick Links</h3>
            <Link
              href="/products"
              className="block py-2 text-amber-400 hover:text-amber-300 hover:underline"
              onClick={onClose}
            >
              All Products
            </Link>
            <Link
              href="/cart"
              className="block py-2 text-amber-400 hover:text-amber-300 hover:underline"
              onClick={onClose}
            >
              Your Cart ({cartCount})
            </Link>
            <Link
              href="/orders"
              className="block py-2 text-amber-400 hover:text-amber-300 hover:underline"
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

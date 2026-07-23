'use client';
import React, { useState, useMemo } from 'react';
import { FaStar, FaFilter, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import {
  setFilteredProducts,
  setProductsData,
} from '@/store/slices/productSlice';

interface FilterSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ isOpen = false, onClose }) => {
  const prices = ['1000', '5000', '10000', '20000'];

  return (
    <>
      <div className="hidden md:block w-full max-w-[280px] lg:max-w-[300px] flex-shrink-0">
        <div className="glass p-5 sticky top-24">
          <h2 className="text-lg text-white font-semibold neon-text inline-block">Filters</h2>
          <hr className="my-4 border-white/10" />
          <BrandsFilter />
          <hr className="my-4 border-white/10" />
          <PriceFilter prices={prices} />
          <hr className="my-4 border-white/10" />
          <Review />
          <hr className="my-4 border-white/10" />
          <div>
            <p className="font-semibold text-lg mt-4 text-white">Availability</p>
            <label className="text-white/80 flex gap-2 items-center cursor-pointer mt-2 hover:text-white transition-colors">
              <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/10 text-amber-400 focus:ring-amber-400/40" />
              <span>Include Out of Stock</span>
            </label>
          </div>
        </div>
      </div>
      <MobileFilterDrawer isOpen={isOpen} onClose={onClose} prices={prices} />
    </>
  );
};

const MobileFilterDrawer: React.FC<FilterSidebarProps & { prices: string[] }> = ({ 
  isOpen, 
  onClose,
  prices 
}) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['brands', 'price']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 animate-fade-in"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] bg-ink-900/95 backdrop-blur-2xl border-t border-white/10 rounded-t-2xl animate-slide-in-up overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <FaFilter className="text-amber-400" /> Filters
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
            aria-label="Close filters"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Brands Section */}
          <div className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.03]">
            <button
              className="w-full flex justify-between items-center p-4 hover:bg-white/5 transition-colors text-white"
              onClick={() => toggleSection('brands')}
            >
              <span className="font-semibold">Brands</span>
              {expandedSections.includes('brands') ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {expandedSections.includes('brands') && (
              <div className="p-4 border-t border-white/10">
                <BrandsFilter />
              </div>
            )}
          </div>

          {/* Price Section */}
          <div className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.03]">
            <button
              className="w-full flex justify-between items-center p-4 hover:bg-white/5 transition-colors text-white"
              onClick={() => toggleSection('price')}
            >
              <span className="font-semibold">Price</span>
              {expandedSections.includes('price') ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {expandedSections.includes('price') && (
              <div className="p-4 border-t border-white/10">
                <PriceFilter prices={prices} />
              </div>
            )}
          </div>

          {/* Reviews Section */}
          <div className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.03]">
            <button
              className="w-full flex justify-between items-center p-4 hover:bg-white/5 transition-colors text-white"
              onClick={() => toggleSection('reviews')}
            >
              <span className="font-semibold">Customer Review</span>
              {expandedSections.includes('reviews') ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {expandedSections.includes('reviews') && (
              <div className="p-4 border-t border-white/10">
                <Review />
              </div>
            )}
          </div>

          {/* Availability */}
          <div className="border border-white/10 rounded-xl p-4 bg-white/[0.03]">
            <p className="font-semibold text-white mb-2">Availability</p>
            <label className="text-white/80 flex gap-2 items-center cursor-pointer hover:text-white transition-colors">
              <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/10 text-amber-400 focus:ring-amber-400/40" />
              <span>Include Out of Stock</span>
            </label>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-white/10 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 neon-btn-outline"
          >
            Clear All
          </button>
          <button
            onClick={onClose}
            className="flex-1 neon-btn"
          >
            Show Results
          </button>
        </div>
      </div>
    </div>
  );
};

const BrandsFilter = () => {
  const [brandFilters, setBrandFilters] = useState<string[]>([]);
  const productsData = useSelector((state: any) => state.products.productsData);
  const filteredBrands = useMemo(
    () =>
      Array.from(
        new Set(
          productsData
            .map((product: any) => product.brand)
            .filter(Boolean)
        )
      ) as string[],
    [productsData]
  );
  const dispatch = useDispatch();
  
  const handleBrandLabelClick = (brand: string) => {
    const brandsToFilter = brandFilters.includes(brand)
      ? brandFilters.filter((item) => item !== brand)
      : [...brandFilters, brand];
    setBrandFilters(brandsToFilter);
    const filterItem =
      brandsToFilter.length === 0
        ? productsData
        : productsData.filter((item: any) =>
            brandsToFilter.includes(item.brand)
          );
    dispatch(setFilteredProducts(filterItem));
  };
  
  const brandItems = filteredBrands.map((brand: string) => (
    <label className="text-white/80 flex gap-2 items-center cursor-pointer py-1 hover:text-white transition-colors" key={brand}>
      <input
        type="checkbox"
        value={brand}
        checked={brandFilters.includes(brand)}
        onChange={() => handleBrandLabelClick(brand)}
        className="w-4 h-4 rounded border-white/20 bg-white/10 text-amber-400 focus:ring-amber-400/40"
      />
      <span className="text-sm">{brand}</span>
    </label>
  ));

  return (
    <div>
      <h3 className="text-base text-white font-semibold mb-2">Brands</h3>
      <div className="space-y-1 max-h-48 overflow-y-auto scrollbar-thin">
        {brandItems}
      </div>
    </div>
  );
};

const PriceFilter = ({ prices }: { prices: string[] }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const productsData = useSelector(
    (state: any) => state.products.filteredProducts
  );
  const dispatch = useDispatch();

  const handlePrice = (price: any) => {
    const filteredByPrice = productsData.filter(
      (item: any) => item.price <= parseInt(price)
    );
    dispatch(setFilteredProducts(filteredByPrice));
  };

  const handleFilter = () => {
    const min = parseInt(minPrice) || 0;
    const max = parseInt(maxPrice) || Infinity;
    const filteredByMinMax = productsData.filter(
      (item: any) => item.price >= min && item.price <= max
    );
    dispatch(setFilteredProducts(filteredByMinMax));
  };

  return (
    <div className="text-white">
      <h3 className="text-base text-white font-semibold mb-2">Price</h3>
      <div className="flex flex-col gap-2 mb-4">
        {prices.map((price: any, index: number) => (
          <button
            key={price}
            onClick={() => handlePrice(price)}
            className="text-left text-sm text-white/80 hover:text-amber-400 transition-colors"
          >
            {index === 0 ? 'Under' : index === prices.length - 1 ? 'Over' : ''} ₹ {price}
          </button>
        ))}
      </div>
      <div className="flex gap-2 items-center">
        <input
          className="w-full px-3 py-2 text-sm rounded-lg bg-white/[0.06] border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400/60"
          type="number"
          placeholder="₹ min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <span className="text-white/40">-</span>
        <input
          type="number"
          placeholder="₹ max"
          className="w-full px-3 py-2 text-sm rounded-lg bg-white/[0.06] border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400/60"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button
          onClick={handleFilter}
          className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:opacity-90 transition-opacity"
        >
          Go
        </button>
      </div>
    </div>
  );
};

const Review = () => {
  const filledStars = Array(5).fill(true);
  const emptyStars = Array(5).fill(false);

  return (
    <div className="text-base text-white font-semibold gap-2 flex flex-col">
      Customer review
      {[4, 3, 2, 1].map((row) => (
        <div key={row} className="flex items-center w-full cursor-pointer text-white/80 hover:opacity-80">
          <span className="flex">
            {filledStars.slice(0, row).map((filled, index) => (
              <Star filled={filled} key={index} />
            ))}
          </span>
          <span className="flex">
            {emptyStars.slice(row, 5).map((filled, index) => (
              <Star filled={filled} key={index} />
            ))}
          </span>
          <span className="ml-2 text-sm">& Up</span>
        </div>
      ))}
    </div>
  );
};

function Star({ filled }: { filled: boolean }) {
  return <FaStar size={14} color={filled ? '#fbbf24' : '#3a4055'} />;
}

export default FilterSidebar;

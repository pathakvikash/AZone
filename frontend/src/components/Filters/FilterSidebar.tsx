'use client';
import React, { useState } from 'react';
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
        <div className="p-4 bg-white shadow-sm rounded-lg sticky top-24">
          <h2 className="text-lg text-primary font-semibold">Filters</h2>
          <hr className="my-4 border-gray-200" />
          <BrandsFilter />
          <hr className="my-4 border-gray-200" />
          <PriceFilter prices={prices} />
          <hr className="my-4 border-gray-200" />
          <Review />
          <hr className="my-4 border-gray-200" />
          <div>
            <p className="font-semibold text-lg mt-4 text-primary">Availability</p>
            <label className="text-primary flex gap-2 items-center cursor-pointer mt-2">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent" />
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
      <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] bg-white rounded-t-2xl animate-slide-in-up overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-lg font-semibold text-primary flex items-center gap-2">
            <FaFilter /> Filters
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Close filters"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Brands Section */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button 
              className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('brands')}
            >
              <span className="font-semibold text-primary">Brands</span>
              {expandedSections.includes('brands') ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {expandedSections.includes('brands') && (
              <div className="p-4 border-t border-gray-200">
                <BrandsFilter />
              </div>
            )}
          </div>

          {/* Price Section */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button 
              className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('price')}
            >
              <span className="font-semibold text-primary">Price</span>
              {expandedSections.includes('price') ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {expandedSections.includes('price') && (
              <div className="p-4 border-t border-gray-200">
                <PriceFilter prices={prices} />
              </div>
            )}
          </div>

          {/* Reviews Section */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button 
              className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection('reviews')}
            >
              <span className="font-semibold text-primary">Customer Review</span>
              {expandedSections.includes('reviews') ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {expandedSections.includes('reviews') && (
              <div className="p-4 border-t border-gray-200">
                <Review />
              </div>
            )}
          </div>

          {/* Availability */}
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="font-semibold text-primary mb-2">Availability</p>
            <label className="text-primary flex gap-2 items-center cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent" />
              <span>Include Out of Stock</span>
            </label>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 flex gap-3">
          <button 
            onClick={onClose}
            className="flex-1 py-3 px-4 border border-gray-300 rounded-lg font-medium text-primary hover:bg-gray-100 transition-colors"
          >
            Clear All
          </button>
          <button 
            onClick={onClose}
            className="flex-1 py-3 px-4 bg-accent hover:bg-accent/90 text-primary font-medium rounded-lg transition-colors"
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
  const filteredBrands = productsData.map((product: any) => product.brand);
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
    <label className="text-primary flex gap-2 items-center cursor-pointer py-1" key={brand}>
      <input
        type="checkbox"
        value={brand}
        checked={brandFilters.includes(brand)}
        onChange={() => handleBrandLabelClick(brand)}
        className="w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent"
      />
      <span className="text-sm">{brand}</span>
    </label>
  ));
  
  return (
    <div>
      <h3 className="text-base text-primary font-semibold mb-2">Brands</h3>
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
    <div className="text-primary">
      <h3 className="text-base text-primary font-semibold mb-2">Price</h3>
      <div className="flex flex-col gap-2 mb-4">
        {prices.map((price: any, index: number) => (
          <button 
            key={price} 
            onClick={() => handlePrice(price)}
            className="text-left text-sm hover:text-accent transition-colors"
          >
            {index === 0 ? 'Under' : index === prices.length - 1 ? 'Over' : ''} ₹ {price}
          </button>
        ))}
      </div>
      <div className="flex gap-2 items-center">
        <input
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          type="number"
          placeholder="₹ min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <span className="text-gray-400">-</span>
        <input
          type="number"
          placeholder="₹ max"
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button 
          onClick={handleFilter}
          className="px-3 py-2 bg-secondary text-white text-sm rounded-md hover:bg-secondary/90 transition-colors"
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
    <div className="text-base text-primary font-semibold gap-2 flex flex-col">
      Customer review
      {[4, 3, 2, 1].map((row) => (
        <div key={row} className="flex items-center w-full cursor-pointer hover:opacity-80">
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
  return <FaStar size={14} color={filled ? '#ffc107' : '#e4e5e9'} />;
}

export default FilterSidebar;

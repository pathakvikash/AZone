'use client';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import ProductList from '@/components/product';
import { useSelector, useDispatch } from 'react-redux';
import {
  setFilteredProducts,
  setProductsData,
} from '@/store/slices/productSlice';

export default function PostPage() {
  return (
    <div className='flex'>
      <FilterSidebar />
      <ProductList />
    </div>
  );
}

const FilterSidebar = () => {
  const brands = ['Nike', 'Adidas', 'Puma', 'Reebok'];
  const prices = ['1000', '5000', '10000', '20000'];

  return (
    <div className='p-4 w-[600px] bg-white shadow'>
      <h2 className='text-lg text-black font-semibold'>Filters</h2>
      <hr className='my-4' />
      <BrandsFilter />
      <hr className='my-4' />
      <PriceFilter prices={prices} />
      <hr className='my-4' />
      <Review />
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
      ? brandFilters.filter((item) => item != brand)
      : [...brandFilters, brand];
    setBrandFilters(brandsToFilter);
    const filterItem =
      brandsToFilter.length == 0
        ? productsData
        : productsData.filter((item: any) =>
            brandsToFilter.includes(item.brand)
          );
    dispatch(setFilteredProducts(filterItem));
  };
  return (
    <FilterComponent
      title='Brands'
      items={filteredBrands}
      showCheckbox={true}
      onLabelClick={handleBrandLabelClick}
      selected={brandFilters}
    />
  );
};

const PriceFilter = ({ prices }: any) => {
  const productsData = useSelector((state: any) => state.products.productsData);
  function handlePrice(price: any) {
    const filteredbyPrice = productsData.filter(
      (item: any) => item.price == price
    );
  }
  return (
    <FilterComponent
      title='Price'
      items={prices}
      showCheckbox={false}
      onLabelClick={handlePrice}
    />
  );
};

const FilterComponent = ({
  title,
  items,
  showCheckbox,
  onLabelClick,
  selected,
}: {
  title: string;
  items: string[];
  showCheckbox: boolean;
  onLabelClick?: (label: string) => void;
  selected?: string[];
}) => {
  return (
    <div className='text-black'>
      <h3 className='text-lg text-black font-semibold'>{title}</h3>
      <div className='flex flex-col flex-wrap'>
        {items.map((item: any) => (
          <FilterItem
            key={item}
            label={item}
            showCheckbox={showCheckbox}
            onLabelClick={onLabelClick}
            selected={selected}
          />
        ))}
      </div>
    </div>
  );
};

const FilterItem = ({
  label,
  showCheckbox,
  onLabelClick,
  selected,
}: {
  label: string;
  showCheckbox: boolean;
  onLabelClick?: (label: string) => void;
  selected?: string[];
}) => {
  return (
    <div
      className='flex items-center'
      onClick={() => onLabelClick && onLabelClick(label)}
    >
      {showCheckbox && (
        <input
          type='checkbox'
          className='mr-2'
          checked={selected?.includes(label)}
        />
      )}
      <span>{label}</span>
    </div>
  );
};
const Review = () => {
  const filledStars = Array(5).fill(true);
  const emptyStars = Array(5).fill(false);

  return (
    <div className='text-lg text-black font-semibold gap-2 flex flex-col'>
      Customer review
      {[4, 3, 2, 1].map((row) => (
        <div key={row} className='flex items-center w-full'>
          <span className='flex'>
            {filledStars.slice(0, row).map((filled, index) => (
              <Star filled={filled} key={index} />
            ))}
          </span>
          <span className='flex'>
            {emptyStars.slice(row, 5).map((filled, index) => (
              <Star filled={filled} key={index} />
            ))}
          </span>
          <span className='ml-2'> & Up</span>
        </div>
      ))}{' '}
    </div>
  );
};

function Star({ filled, onClick }: any) {
  return <FaStar color={filled ? '#ffc107' : '#e4e5e9'} onClick={onClick} />;
}

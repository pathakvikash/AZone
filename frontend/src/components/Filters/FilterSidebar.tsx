'use client';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import {
  setFilteredProducts,
  setProductsData,
} from '@/store/slices/productSlice';

const FilterSidebar: React.FC = () => {
  const prices = ['1000', '5000', '10000', '20000'];

  return (
    <div className='p-4 max-w-[500px] bg-white shadow'>
      <h2 className='text-lg text-black font-semibold'>Filters</h2>
      <hr className='my-4' />
      <BrandsFilter />
      <hr className='my-4' />
      <PriceFilter prices={prices} />
      <hr className='my-4' />
      <Review />
      <>
        <p className='font-semibold text-lg mt-4 text-black'>Availability</p>
        <span className='text-black flex gap-2'>
          <input type='checkbox' />
          Include Out of Stock
        </span>
      </>
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
  const brandItems = filteredBrands.map((brand: string) => (
    <label className='text-black flex gap-2' key={brand}>
      <input
        type='checkbox'
        value={brand}
        checked={brandFilters.includes(brand)}
        onChange={() => handleBrandLabelClick(brand)}
      />
      {brand}
    </label>
  ));
  return (
    <div>
      <h3 className='text-lg text-black font-semibold'>Brands</h3>
      {brandItems}
    </div>
  );
};

const PriceFilter = ({ prices }: any) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const productsData = useSelector(
    (state: any) => state.products.filteredProducts
  );
  const dispatch = useDispatch();

  const handlePrice = (price: any) => {
    const filteredByPrice = productsData.filter(
      (item: any) => item.price <= price
    );
    dispatch(setFilteredProducts(filteredByPrice));
  };

  const handleFilter = () => {
    const filteredByMinMax = productsData.filter(
      (item: any) => item.price >= minPrice && item.price <= maxPrice
    );
    dispatch(setFilteredProducts(filteredByMinMax));
  };

  return (
    <div className='text-black'>
      <h3 className='text-lg text-black font-semibold'>Price</h3>
      <div className='flex items-start flex-col '>
        {prices.map((price: any, index: number) => (
          <button key={price} onClick={() => handlePrice(price)}>
            <span className=''>{` ${
              index === 0 ? 'Under' : index === prices.length - 1 ? 'Over' : ''
            } ₹ ${price}`}</span>
          </button>
        ))}
      </div>
      <div className='custom flex '>
        <input
          className='w-[50%] mr-2'
          type='text'
          placeholder='₹ min'
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type='text'
          placeholder='₹ max'
          className='w-[50%] mr-2'
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button onClick={handleFilter}>Go</button>
      </div>
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

export { FilterSidebar, BrandsFilter, PriceFilter, Review };

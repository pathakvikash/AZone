import React from 'react';
import { FaStar } from 'react-icons/fa';
import ProductList from '@/components/product';

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
      <FilterComponent title='Brands' item={brands} />
      <hr className='my-4' />
      <FilterComponent title='Price' item={prices} />
      <hr className='my-4' />
      <Review />
    </div>
  );
};

const FilterComponent = ({ title, item }: any) => {
  const showCheckbox = title === 'Brands';

  return (
    <div className='text-black'>
      <h3 className='text-lg text-black font-semibold'>{title}</h3>
      {/* <hr className='my-2' /> */}
      <div className='flex flex-col flex-wrap'>
        {item.map((item: any) => (
          <FilterItem key={item} item={item} showCheckbox={showCheckbox} />
        ))}
      </div>
    </div>
  );
};

const FilterItem = ({ item, showCheckbox }: any) => {
  return (
    <div className='flex items-center'>
      {showCheckbox && <input type='checkbox' className='mr-2' />}
      <span>{item}</span>
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

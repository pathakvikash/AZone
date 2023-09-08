import React from 'react';
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
    <div className='p-4 bg-white shadow'>
      <h2 className='text-lg text-black font-semibold'>Filters</h2>
      <hr className='my-4' />
      <FilterComponent title='Brands' item={brands} />
      <hr className='my-4' />
      <FilterComponent title='Price' item={prices} />
    </div>
  );
};

const FilterComponent = ({ title, item }: any) => {
  const showCheckbox = title === 'Brands';

  return (
    <div className='text-black'>
      <h3 className='text-md font-medium'>{title}</h3>
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

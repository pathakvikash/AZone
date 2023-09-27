import React from 'react';
import ProductList from '@/components/product';
import { FilterSidebar } from '@/components/Filters/FilterSidebar';

export default function PostPage() {
  return (
    <div className='flex'>
      <FilterSidebar />
      <ProductList />
    </div>
  );
}

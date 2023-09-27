import React from 'react';
import ProductList from '@/components/product';
import { FilterSidebar } from './_comp/page';

export default function PostPage() {
  return (
    <div className='flex'>
      <FilterSidebar />
      <ProductList />
    </div>
  );
}

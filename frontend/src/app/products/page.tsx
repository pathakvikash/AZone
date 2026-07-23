import React from 'react';
import ProductList from '@/components/product';
import FilterSidebar from '@/components/Filters/FilterSidebar';
import { getProducts } from '@/utils/getProducts';

export default async function PostPage() {
  const products = await getProducts();

  return (
    <div className='min-h-screen'>
      <div className='flex gap-4 px-2 sm:px-4 py-4 max-w-screen-2xl mx-auto items-start'>
        <FilterSidebar />
        <ProductList initialProducts={products} />
      </div>
    </div>
  );
}

'use client';
import { useDispatch } from 'react-redux';
import {
  setProductsData,
  setFilteredProducts,
} from '@/store/slices/productSlice';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BASE_URL } from '@/utils/constant';
import { useSelector } from 'react-redux';

const Product = ({ product }: any) => {
  const { name, category, price, image_url, rating } = product;
  const stars = Array.from(Array(rating), (_, index) => (
    <i key={index} className='fas fa-star'></i>
  ));
  return (
    <div className='w-full rounded overflow-hidden shadow-lg mx-2 my-2 hover:shadow-2xl transition duration-300 transform hover:scale-105'>
      <img src={image_url} alt={name} className='w-full h-48 object-cover' />
      <Link href={`/products/${product.id}`}>
        <div className='px-6 py-4'>
          <div className='font-bold text-gray-600 text-sm mb-2'>{name}</div>
          <p className='text-gray-600 text-base mb-2'>{category}</p>
          <p className='text-gray-700 text-base'>₹{price}</p>

          {stars}
        </div>
      </Link>
    </div>
  );
};

const ProductList = () => {
  const dispatch = useDispatch();
  const filterProducts = useSelector(
    (state: any) => state.products.filteredProducts
  );

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products`);
      if (response.ok) {
        const productsData = await response.json();
        dispatch(setProductsData(productsData));
        dispatch(setFilteredProducts(productsData));
      } else {
        console.error('Error fetching product data');
      }
    } catch (error) {
      console.error('Error fetching product data', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='flex flex-wrap justify-around'>
      {filterProducts?.map((product: any) => (
        <div key={product.id} className='flex w-[350px] h-fit '>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;

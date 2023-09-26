'use client';
import {
  setProductsData,
  setFilteredProducts,
} from '@/store/slices/productSlice';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BASE_URL } from '@/utils/constant';
import { useSelector, useDispatch } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import Currency from 'react-currency-formatter';

import { addToCart } from '@/store/slices/cartSlice';

const Product = ({ product }: any) => {
  const { name, category, price, image_url, rating, description, quantity } =
    product;
  const dispatch = useDispatch();
  const stars = [];

  for (let i = 0; i < product.rating; i++) {
    stars.push(<FaStar color={'#ffc107'} key={i} />);
  }

  const addItemToBasket = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className='w-full rounded overflow-hidden shadow-lg mx-2 my-2 hover:shadow-2xl transition duration-300 transform hover:scale-105'>
      <img src={image_url} alt={name} className='w-full h-48 object-cover' />
      <div className='flex p-2 flex-col justify-center items-center'>
        <Link href={`/products/${product.id}`}>
          <div className='px-6 py-4 flex-col gap-3 flex '>
            <div className='font-bold text-gray-600 text-sm '>{name}</div>
            <p className='text-gray-600 text-base'>{category}</p>

            <div className='flex gap-2'>
              <div className='flex'>{stars}</div>
            </div>
            <div className='text-gray-600 text-base'>{description}</div>
            <p className='text-gray-700 text-base'>
              <Currency quantity={price} currency='INR' />
            </p>
          </div>
        </Link>
        <button
          onClick={addItemToBasket}
          className='mt-auto p-4 rounded-lg w-full bg-[#f0c14b] button'
        >
          Add to Basket
        </button>
      </div>
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

'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { baseUrl } from '@/constant';

const Product = ({ product }: any) => {
  const { name, category, price, image_url } = product;
  return (
    <div className=' w-full rounded overflow-hidden shadow-lg mx-2 my-2 hover:shadow-2xl transition duration-300 transform hover:scale-105'>
      <img src={image_url} alt={name} className='w-full h-48 object-cover' />
      <Link href={`/products/${product.id}`}>
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{name}</div>
          <p className='text-gray-600 text-base mb-2'>{category}</p>
          <p className='text-gray-700 text-base'>{price}</p>
        </div>
      </Link>
    </div>
  );
};

const ProductList = () => {
  const [productsData, setProductsData] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${baseUrl}/products`);
      if (response.ok) {
        const productsData = await response.json();

        setProductsData(productsData);
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
    <div className='flex flex-wrap justify-center'>
      {productsData?.map((product: any) => (
        <div key={product.id} className='flex w-[350px] '>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;

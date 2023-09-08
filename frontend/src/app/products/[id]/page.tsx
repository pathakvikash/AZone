'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
  const pathname = usePathname().split('/').pop();
  const [product, setProduct] = useState<{ [key: string]: any } | null>(null);

  const fetchProductById = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/products/${pathname}`
      );
      if (response.ok) {
        const productData = await response.json();
        setProduct(productData);
      } else {
        console.error('Error fetching product data');
      }
    } catch (error) {
      console.error('Error fetching product data', error);
    }
  };

  useEffect(() => {
    fetchProductById();
  }, [pathname]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='max-w-xs rounded overflow-hidden shadow-lg mx-2 my-2 hover:shadow-2xl transition duration-300 transform hover:scale-105'>
      <img
        src={product.image_url}
        alt={product.name}
        className='w-full h-48 object-cover'
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{product.name}</div>
        <p className='text-gray-600 text-base mb-2'>{product.category}</p>
        <p className='text-gray-700 text-base'>{product.price}</p>
      </div>
    </div>
  );
};
export default ProductDetail;

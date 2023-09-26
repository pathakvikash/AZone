'use client';
import { useEffect, useRef, useState } from 'react';
import ProductList from '@/components/product';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { addToCart } from '@/store/slices/cartSlice';
import { useDispatch } from 'react-redux';

import 'swiper/css';
import 'swiper/css/navigation';

import {
  Deals,
  homeDecorImg,
  homeCleanerImg,
  mesStyle,
} from '@/utils/constant';
import Image from 'next/image';
import { ImageGrid } from '@/components/GridCards/ImageGrid';
import Carousel from '@/components/Carousel/Carousel';

export default function Home() {
  return (
    <div className='min-w-[1000px] max-w-[1500px] m-auto'>
      <Carousel />

      <div className='flex flex-col -mt-80 '>
        <div className='flex flex-col md:flex-row justify-around'>
          <div className='flex flex-wrap md:flex-row lg:flex gap-6'>
            <ImageGrid
              images={homeDecorImg}
              title='Revamp your home in style'
              onExploreAll={() => {}}
            />
            <ImageGrid
              images={mesStyle}
              title='Up to 60% off | Styles for men'
              onExploreAll={() => {}}
            />
            <ImageGrid
              images={homeCleanerImg}
              title='Starting ₹99 | All your home improvement needs'
              onExploreAll={() => {}}
            />
            <ImageGrid
              images={mesStyle}
              title='Up to 60% off | Styles for men'
              onExploreAll={() => {}}
            />
          </div>
        </div>
        <ProductList />
      </div>

      <div className='flex items-center overflow-x-auto'>
        {Deals.map((deal, index) => (
          <div key={index} className='flex-shrink-0'>
            <Image
              loader={myLoader}
              src={deal.imageUrl}
              alt={deal.name}
              width={200}
              height={200}
              layout='fixed'
            />
          </div>
        ))}
      </div>

      <ProductGrid products={productsBottom} />
    </div>
  );
}

const myLoader = ({ src }: any) => {
  return `${src}?w=300&h=300&fit=crop&auto=format`;
};

export const productsBottom = [
  {
    image_url:
      'https://images-eu.ssl-images-amazon.com/images/I/615Bt2PzCtL._AC_UL320_SR320,320_.jpg',
    name: 'USB-C to USB-C Cable',
    price: '19.99',
    quantity: 1,
    description: 'description about image',
  },
  {
    image_url:
      'https://images-eu.ssl-images-amazon.com/images/I/51kEh+wYWLL._AC_UL320_SR320,320_.jpg',
    name: 'OnePlus Warp Charge Cable',
    price: '29.99',
    quantity: 1,
    description: 'description about image',
  },
  {
    image_url:
      'https://images-eu.ssl-images-amazon.com/images/I/51+Xck7N4VL._AC_UL320_SR320,320_.jpg',
    name: 'USB-C to USB-C Cable',
    price: '19.99',
    quantity: 1,
    description: 'description about image',
  },
  {
    image_url:
      'https://images-eu.ssl-images-amazon.com/images/I/41HYPIrcYQL._AC_UL320_SR320,320_.jpg',
    name: 'OnePlus Warp Charge Cable',
    price: '29.99',
    quantity: 1,
    description: 'description about image',
  },
  {
    image_url:
      'https://images-eu.ssl-images-amazon.com/images/I/61T-BidOUgL._AC_UL320_SR320,320_.jpg',
    name: 'USB-C to USB-C Cable',
    price: '19.99',
    quantity: 1,
    description: 'description about image',
  },
  {
    image_url:
      'https://images-eu.ssl-images-amazon.com/images/I/615X5v6NsIL._AC_UL320_SR320,320_.jpg',
    name: 'OnePlus Warp Charge Cable',
    price: '29.99',
    quantity: 1,
    description: 'description about image',
  },
];

export const ProductGrid = ({ products }: any) => {
  const dispatch = useDispatch();

  const buyNow = (product: any) => {
    dispatch(addToCart(product));
  };
  return (
    <div className='relative'>
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        slidesPerView={5} // Show 5 slides at a time
        className='h-[50%]'
      >
        {products.map((product: any, index: any) => (
          <SwiperSlide key={index}>
            <div className='flex-shrink-0 px-4'>
              <div className='border text-black p-4 rounded-md'>
                <Image
                  loader={myLoader}
                  src={product.image_url}
                  alt={product.name}
                  width={200}
                  height={200}
                  layout='responsive'
                />
                <h2 className='text-lg font-bold mb-2'>{product.name}</h2>
                <p className='text-gray-700 mb-2'>{product.price}</p>
                <button
                  onClick={() => buyNow(product)}
                  className='bg-blue-500 text-white px-4 py-2 rounded'
                >
                  Buy Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

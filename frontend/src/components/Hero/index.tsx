'use client';
import { useState } from 'react';
const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    'https://m.media-amazon.com/images/I/71QRxZvKnGL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg',
  ];

  const handleSlide = (direction: any) => {
    if (direction === 'next') {
      setSlideIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    } else if (direction === 'prev') {
      setSlideIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section className='hero relative'>
      <div className='hero-background relative'>
        <img
          src={images[slideIndex]}
          alt='Amazon Hero Background'
          className='w-full h-auto'
        />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
          <h1 className='text-4xl font-bold'>Welcome to Amazon</h1>
          <p className='text-xl my-4'>Your One-Stop Shop for Everything</p>
          <button className='bg-yellow-500 hover:bg-yellow-400 py-2 px-6 rounded-lg text-lg cursor-pointer transition duration-300 ease-in-out'>
            Shop Now
          </button>
        </div>
        <div className='absolute bottom-4 left-4 right-4 flex justify-between'>
          <button
            onClick={() => handleSlide('prev')}
            className='slider-button prev-button text-white bg-gray-500 hover:bg-gray-400 py-2 px-4 rounded-lg cursor-pointer transition duration-300 ease-in-out'
          >
            Prev
          </button>
          <button
            onClick={() => handleSlide('next')}
            className='slider-button next-button text-white bg-gray-500 hover:bg-gray-400 py-2 px-4 rounded-lg cursor-pointer transition duration-300 ease-in-out'
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

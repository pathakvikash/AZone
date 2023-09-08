'use client';
import { useEffect, useRef, useState } from 'react';
import Hero from '@/components/Hero';
import ProductList from '@/components/product';
// import CircularSlider from '@/components/Sliders/CircularSlider';
import { Deals } from '@/constant';
import Image from 'next/image';

const bannerData = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/G/31/img21/shoes/2023/AfterPD/Hero/ewd._SX3000_QL85_.jpg',
    alt: 'Footwear',
    text: 'Footwear Deal',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/G/31/img21/shoes/2023/June/MFD/Herotater/HERO_MEN_WOMEN-2._SX3000_QL85_.jpg',
    alt: 'Footwear',
    text: 'Footwear Deal',
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductList />
      {/* <Slider bannerData={bannerData} /> */}

      <div className='flex items-center'>
        {Deals.map((deal, index) => (
          <div key={deal.id}>
            <Image
              loader={myLoader}
              src={deal.imageUrl}
              alt={deal.name}
              width={300}
              height={300}
              layout='fixed'
            />
          </div>
        ))}
      </div>
      <DealsSlider deals={Deals} />

      {/* <CircularSlider /> */}
    </div>
  );
}

const myLoader = ({ src }: any) => {
  return `${src}?w=300&h=300&fit=crop&auto=format`;
};

const DealsSlider = ({ deals }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSliderWidth = () => {
      if (sliderRef.current) {
        setSliderWidth(sliderRef.current.offsetWidth);
      }
    };

    updateSliderWidth();

    window.addEventListener('resize', updateSliderWidth);
    return () => {
      window.removeEventListener('resize', updateSliderWidth);
    };
  }, []);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === deals.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(autoSlide);
    };
  }, [activeIndex, deals]);

  return (
    <div
      className='DealsSlider relative overflow-hidden'
      style={{ height: '300px', width: '100%' }}
    >
      <div
        ref={sliderRef}
        className='w-full h-full transition-transform duration-500'
        style={{ transform: `translateX(${-activeIndex * sliderWidth}px)` }}
      >
        {deals.map((deal: any) => (
          <div key={deal.id} className='inline-block'>
            <img
              src={deal.imageUrl}
              alt={deal.name}
              width={300}
              height={300}
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          setActiveIndex((prevIndex) =>
            prevIndex === 0 ? deals.length - 1 : prevIndex - 1
          )
        }
        className='absolute left-0 top-1/2 transform -translate-y-1/2 h-12 w-12 bg-white border border-gray-400 rounded-full text-gray-500 font-bold text-lg text-center flex items-center justify-center z-10'
      >
        &laquo;
      </button>
      <button
        onClick={() =>
          setActiveIndex((prevIndex) =>
            prevIndex === deals.length - 1 ? 0 : prevIndex + 1
          )
        }
        className='absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-12 bg-white border border-gray-400 rounded-full text-gray-500 font-bold text-lg text-center flex items-center justify-center z-10'
      >
        &raquo;
      </button>
    </div>
  );
};

'use client';
import { useEffect, useRef, useState } from 'react';
import Hero from '@/components/Hero';
import ProductList from '@/components/product';
import CircularSlider from '@/components/Sliders/CircularSlider';
import { Deals, homeDecorImg, homeCleanerImg, mesStyle } from '@/constant';
import Image from 'next/image';
import { ImageGrid } from '@/components/GridCards/ImageGrid';

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

      <div className=' flex justify-around '>
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
      <ProductList />

      <DealsSlider deals={Deals} />
      <FadeSlider deals={Deals} />
      <ProductGrid products={products} />
    </div>
  );
}

const myLoader = ({ src }: any) => {
  return `${src}?w=300&h=300&fit=crop&auto=format`;
};

const DealsSlider = ({ deals }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === deals.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(autoSlide);
    };
  }, [deals]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className='DealsSlider relative overflow-hidden'>
      <div
        ref={sliderRef}
        className='w hfull flex transition-transform duration-500'
        style={{ transform: `translateX(${-activeIndex * 100}%)` }}
      >
        {deals.map((deal: any, index: number) => (
          <div key={index} className='w-full flex-shrink-0'>
            <img
              src={deal.imageUrl}
              alt={deal.name}
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          goToSlide(activeIndex === 0 ? deals.length - 1 : activeIndex - 1)
        }
        className='absolute left-0 top-1/2 transform -translate-y-1/2 h-12 w-12 bg-white border border-gray-400 rounded-full text-gray-500 font-bold text-lg text-center flex items-center justify-center z-10'
      >
        &laquo;
      </button>
      <button
        onClick={() =>
          goToSlide(activeIndex === deals.length - 1 ? 0 : activeIndex + 1)
        }
        className='absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-12 bg-white border border-gray-400 rounded-full text-gray-500 font-bold text-lg text-center flex items-center justify-center z-10'
      >
        &raquo;
      </button>
    </div>
  );
};

const FadeSlider = ({ deals }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === deals.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(autoSlide);
    };
  }, [deals]);

  return (
    <div className='DealsSlider relative overflow-hidden'>
      <div className='flex items-center overflow-x-auto'>
        {deals.map((deal: any, index: number) => (
          <div
            key={index}
            className={`flex-shrink-0 ${
              index === activeIndex ? 'opacity-100' : 'opacity-50'
            } transition-opacity duration-500`}
          >
            <Image
              loader={myLoader}
              src={deal.imageUrl}
              alt={deal.name}
              width={100}
              height={100}
              layout='fixed'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const products = [
  {
    image:
      'https://images-eu.ssl-images-amazon.com/images/I/615Bt2PzCtL._AC_UL320_SR320,320_.jpg',
    title: 'USB-C to USB-C Cable',
    price: '$19.99',
  },
  {
    image:
      'https://images-eu.ssl-images-amazon.com/images/I/51kEh+wYWLL._AC_UL320_SR320,320_.jpg',
    title: 'OnePlus Warp Charge Cable',
    price: '$29.99',
  },
  {
    image:
      'https://images-eu.ssl-images-amazon.com/images/I/51+Xck7N4VL._AC_UL320_SR320,320_.jpg',
    title: 'USB-C to USB-C Cable',
    price: '$19.99',
  },
  {
    image:
      'https://images-eu.ssl-images-amazon.com/images/I/41HYPIrcYQL._AC_UL320_SR320,320_.jpg',
    title: 'OnePlus Warp Charge Cable',
    price: '$29.99',
  },
  {
    image:
      'https://images-eu.ssl-images-amazon.com/images/I/61T-BidOUgL._AC_UL320_SR320,320_.jpg',
    title: 'USB-C to USB-C Cable',
    price: '$19.99',
  },
  {
    image:
      'https://images-eu.ssl-images-amazon.com/images/I/615X5v6NsIL._AC_UL320_SR320,320_.jpg',
    title: 'OnePlus Warp Charge Cable',
    price: '$29.99',
  },
];

const ProductGrid = ({ products }: any) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsPerPage >= products.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0
        ? products.length - (products.length % itemsPerPage)
        : prevIndex - itemsPerPage
    );
  };

  return (
    <div className='relative'>
      <div className='flex overflow-x-auto overflow-y-hidden whitespace-no-wrap -mx-4'>
        {products.map((product: any, index: any) => (
          <div
            key={index}
            className={`flex-shrink-0 px-4 ${
              index >= startIndex && index < startIndex + itemsPerPage
                ? ''
                : 'hidden'
            }`}
          >
            <div className='border text-black p-4 rounded-md'>
              <img
                src={product.image}
                alt={product.title}
                className='w-full h-64 object-cover mb-4 rounded'
              />
              <h2 className='text-lg font-bold mb-2'>{product.title}</h2>
              <p className='text-gray-700 mb-2'>{product.price}</p>
              <button
                onClick={() => alert(`Buy  ${product.title}`)}
                className='bg-blue-500 text-white px-4 py-2 rounded'
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className='absolute left-0 top-1/2 transform -translate-y-1/2 h-12 w-12 bg-white border border-gray-400 rounded-full text-gray-500 font-bold text-lg text-center flex items-center justify-center z-10'
      >
        &laquo;
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-0 top-1/2 transform -translate-y-1/2 h-12 w-12 bg-white border border-gray-400 rounded-full text-gray-500 font-bold text-lg text-center flex items-center justify-center z-10'
      >
        &raquo;
      </button>
    </div>
  );
};

'use client';
import { useState } from 'react';

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
const DealsBanner = () => {
  return <div></div>;
};

export default DealsBanner;

const Slider = ({ bannerData }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((activeIndex + 1) % bannerData.length);

  const prevSlide = () =>
    setActiveIndex((activeIndex - 1 + bannerData.length) % bannerData.length);

  const selectSlide = (index: any) => setActiveIndex(index);

  const renderBanner = (banner: any, index: any) => {
    const isActive = index === activeIndex;
    return (
      <div
        key={banner.id}
        className={`absolute h-[200px] w-full transition-opacity duration-500 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={banner.img}
          alt={banner.alt}
          className='w-full h-full object-cover'
        />
        <div className='absolute h-min w-full flex items-center justify-center'>
          <div className='text-black font-bold text-2xl p-4 w-1/2 text-center'>
            {banner.text}
          </div>
        </div>
      </div>
    );
  };

  const renderBullets = () => {
    return (
      <div className='mt-4 flex items-center justify-center space-x-4'>
        {bannerData.map((banner: any, index: any) => (
          <div
            key={banner.id}
            onClick={() => selectSlide(index)}
            className={`cursor-pointer p-1 ${
              index === activeIndex
                ? 'bg-black text-white'
                : 'bg-gray-400 text-black'
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    );
  };

  const renderArrowButtons = () => {
    return (
      <div className='absolute top-0 bottom-0 flex items-center justify-between w-full'>
        <button
          onClick={prevSlide}
          className='bg-black text-white font-bold py-2 px-4 rounded-l'
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className='bg-black text-white font-bold py-2 px-4 rounded-r'
        >
          &gt;
        </button>
      </div>
    );
  };

  const renderBannerFullscreen = () => {
    return (
      <div className='relative h-screen'>
        {renderBanner(bannerData[activeIndex], activeIndex)}
        {renderArrowButtons()}
        {renderBullets()}
      </div>
    );
  };

  return (
    <div className='max-w-xl mx-auto'>
      <h2 className='text-xl font-bold my-2'>Full-screen banner</h2>
      {renderBannerFullscreen()}
    </div>
  );
};

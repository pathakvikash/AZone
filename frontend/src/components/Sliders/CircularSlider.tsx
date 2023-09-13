import React, { useState } from 'react';
import Image from 'next/image';

const phoneDeals = [
  {
    id: 1,
    name: 'All Deal',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/all_deals.jpg',
  },
  {
    id: 2,
    name: 'Deal of the Day',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/blockbuster.jpg',
  },
  {
    id: 3,
    name: 'Lightning Deal',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/trending.jpg',
  },
  {
    id: 4,
    name: 'Mobiles Electronics',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_Icons_Template_1_icons_01.jpg',
  },
  {
    id: 5,
    name: 'Electronics',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/electronics.jpg',
  },
  {
    id: 6,
    name: 'Mobile & Computer Accessories',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/computer_accessories.jpg',
  },
  {
    id: 3,
    name: 'Lightning Deal',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/trending.jpg',
  },
  {
    id: 4,
    name: 'Mobiles Electronics',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_Icons_Template_1_icons_01.jpg',
  },
  {
    id: 5,
    name: 'Electronics',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/electronics.jpg',
  },
  {
    id: 6,
    name: 'Mobile & Computer Accessories',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/computer_accessories.jpg',
  },
  {
    id: 3,
    name: 'Lightning Deal',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/trending.jpg',
  },
  {
    id: 4,
    name: 'Mobiles Electronics',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_Icons_Template_1_icons_01.jpg',
  },
  {
    id: 5,
    name: 'Electronics',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/electronics.jpg',
  },
  {
    id: 6,
    name: 'Mobile & Computer Accessories',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/computer_accessories.jpg',
  },
  {
    id: 3,
    name: 'Lightning Deal',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/trending.jpg',
  },
  {
    id: 4,
    name: 'Mobiles Electronics',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_Icons_Template_1_icons_01.jpg',
  },
  {
    id: 5,
    name: 'Electronics',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/electronics.jpg',
  },
  {
    id: 6,
    name: 'Mobile & Computer Accessories',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/computer_accessories.jpg',
  },
];
const CircularSlider = () => {
  const [currentDealIndex, setCurrentDealIndex] = useState(0);

  const changeDeal = (increment: any) => {
    setCurrentDealIndex(
      (prevIndex) =>
        (prevIndex + increment + phoneDeals.length) % phoneDeals.length
    );
  };

  const currentDeal = phoneDeals[currentDealIndex];

  return (
    <div className='max-w-screen-lg mx-auto  relative overflow-hidden'>
      <button
        className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-gray-600'
        onClick={() => changeDeal(-1)}
      >
        &lt;
      </button>
      <button
        className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-gray-600'
        onClick={() => changeDeal(1)}
      >
        &gt;
      </button>
      <div
        className='w-[8rem] h-[8rem] rounded-full overflow-hidden'
        style={{
          border: '2px solid #ccc',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          loader={myLoader}
          src={currentDeal.imageUrl}
          alt={currentDeal.name}
          width={300}
          height={300}
          layout='fixed'
        />
      </div>
    </div>
  );
};

export default CircularSlider;
const myLoader = ({ src }: any) => {
  return `${src}?w=300&h=300&fit=crop&auto=format`;
};

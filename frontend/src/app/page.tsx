'use client';
import ProductList from '@/components/product';
import ProductGrid from '@/components/GridCards/ProductGrid';
import CarouselCategory from '@/components/Carousel/CarouselCategory';
import { BASE_URL } from '@/utils/constant';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Deals,
  gridData,
  productsBottom,
  bestSellerData,
} from '@/utils/constant';
import Image from 'next/image';
import { ImageGrid } from '@/components/GridCards/ImageGrid';
import Carousel from '@/components/Carousel/Carousel';

export function Home() {
  const homeCards = [
    {
      img: 'https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_CC_2X._SY608_CB576938243_.jpg',
      title: 'Top Deals',
    },
    {
      img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_758X608_1._SY608_CB614835787_.jpg',
      title: 'Bluetooth Calling Smartwatch starts at ₹1,999',
    },
    {
      img: 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/GW_Desktop/1199101_758x608_New_compressed._SY608_CB448277514_.jpg',
      title: 'Start your day | Fitness Journey',
    },
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const results = await fetch(`${BASE_URL}/products`).then((response) =>
        response.json()
      );
      setData(results);
    })();
  }, []);

  return (
    <div className='bg-amazonclone-background'>
      <div className='min-w-[1000px] max-w-[1500px] m-auto'>
        <Carousel />
        <div className='grid grid-cols-3 xl:grid-cols-4 -mt-80'>
          {homeCards.map((card, index) => (
            <HomePageCard
              key={index}
              img={card.img}
              title={card.title}
              link='see all offers'
            />
          ))}
          {gridData.map((data) => (
            <ImageGrid
              key={data.title}
              images={data.url}
              title={data.title}
              onExploreAll={() => {}}
            />
          ))}
        </div>
        <ProductList />
      </div>
      <CarouselCategory data={bestSellerData} />
      <ProductGrid products={productsBottom} />
    </div>
  );
}

const HomePageCard = ({ title, img, link }: any) => {
  return (
    <div className='h-[420px] bg-white z-30 m-3 rounded-sm shadow-sm'>
      <div className='text-lg text-black whitespace-nowrap overflow-ellipsis overflow-hidden xl:text-xl font-semibold ml-4 mt-4'>
        {title}
      </div>
      <div className='h-[300px] m-4'>
        <Image
          src={img}
          loader={myLoader}
          alt='Home card'
          width={200}
          height={200}
          layout='responsive'
        />
      </div>
      <div className='text-xs xl:text-sm text-blue-400 ml-4'>{link}</div>
    </div>
  );
};

const myLoader = ({ src }: any) => {
  return `${src}?w=300&h=300&fit=crop&auto=format`;
};

export default Home;

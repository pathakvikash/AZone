import ProductGrid from '@/components/GridCards/ProductGrid';
import CarouselCategory from '@/components/Carousel/CarouselCategory';

import {
  Deals,
  gridData,
  productsBottom,
  bestSellerData,
} from '@/utils/constant';
import Image from 'next/image';
import { ImageGrid } from '@/components/GridCards/ImageGrid';
import Carousel from '@/components/Carousel/Carousel';

export default async function Home() {
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

  return (
    <div className="bg-background min-h-screen">
      <div className="w-full mx-auto">
        <Carousel />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-4 -mt-40 sm:-mt-60 relative z-10">
          {homeCards.map((card, index) => (
            <HomePageCard
              key={index}
              img={card.img}
              title={card.title}
              link="see all offers"
            />
          ))}
          {gridData.map((data) => (
            <ImageGrid
              key={data.title}
              images={data.url}
              title={data.title}
              href="/products"
            />
          ))}
        </div>
      </div>
      
      <div className="mt-6 sm:mt-8 md:mt-12">
        <CarouselCategory data={bestSellerData} />
      </div>
      
      <div className="px-2 sm:px-4 pb-6 sm:pb-8">
        <ProductGrid products={productsBottom} />
      </div>
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
          alt='Home card'
          width={400}
          height={300}
          className='w-auto h-auto object-contain'
        />
      </div>
      <div className='text-xs xl:text-sm text-blue-400 ml-4'>{link}</div>
    </div>
  );
};

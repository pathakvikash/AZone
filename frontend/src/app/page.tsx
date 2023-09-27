'use client';
import ProductList from '@/components/product';

import ProductGrid from '@/components/GridCards/ProductGrid';

import 'swiper/css';
import 'swiper/css/navigation';

import {
  Deals,
  homeDecorImg,
  homeCleanerImg,
  mesStyle,
  productsBottom,
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

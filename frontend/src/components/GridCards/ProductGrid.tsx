'use client';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const ProductGrid = ({ products }: any) => {
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
          <SwiperSlide key={index} className=''>
            <div className='flex-shrink-0 px-4'>
              <div className='border text-black p-4 bg-white rounded-md'>
                <Image
                  loader={myLoader}
                  src={product.image_url}
                  alt={product.name}
                  width={200}
                  height={200}
                />
                <h2 className='text-lg font-bold m-2'>{product.name}</h2>
                <p className='text-gray-700 m-2'>{'₹' + product.price}</p>
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

export default ProductGrid;

const myLoader = ({ src }: any) => {
  return `${src}?w=300&h=300&fit=crop&auto=format`;
};

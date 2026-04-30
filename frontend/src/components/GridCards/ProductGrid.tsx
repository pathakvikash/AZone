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
    <div className="relative w-full px-2 sm:px-4">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        breakpoints={{
          // Mobile small
          320: {
            slidesPerView: 1,
          },
          // Mobile large / Tablet small
          480: {
            slidesPerView: 2,
          },
          // Tablet
          768: {
            slidesPerView: 3,
          },
          // Desktop
          1024: {
            slidesPerView: 4,
          },
          // Large desktop
          1280: {
            slidesPerView: 5,
          },
        }}
        className="h-auto min-h-[300px] sm:min-h-[350px]"
      >
        {products.map((product: any, index: any) => (
          <SwiperSlide key={index} className="h-full">
            <div className="flex-shrink-0 px-1 sm:px-2 h-full">
              <div className="border border-gray-200 text-black p-3 sm:p-4 bg-white rounded-md h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
                <div className="relative h-32 sm:h-40 md:h-48 w-full mb-2 sm:mb-4 flex-shrink-0">
                  <Image
                    loader={myLoader}
                    src={product.image_url}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain"
                  />
                </div>
                <h2 className="text-sm sm:text-base font-bold m-1 sm:m-2 line-clamp-2">
                  {product.name}
                </h2>
                <p className="text-gray-700 m-1 sm:m-2 font-semibold">
                  {'₹' + product.price.toLocaleString()}
                </p>
                <button
                  onClick={() => buyNow(product)}
                  className="mt-auto bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded text-sm font-medium transition-colors duration-150"
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

const myLoader = ({ src }: { src: string }) => {
  return `${src}?w=300&h=300&fit=crop&auto=format`;
};

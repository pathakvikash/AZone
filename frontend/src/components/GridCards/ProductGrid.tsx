'use client';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

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
        {products.map((product: any, index: number) => (
          <SwiperSlide key={product.id ?? index} className="h-full">
            <div className="flex-shrink-0 px-1 sm:px-2 h-full pb-2">
              <div className="glass glass-hover p-3 sm:p-4 h-full flex flex-col group">
                <Link
                  href={`/products/${product.id}`}
                  className="flex flex-col flex-grow"
                >
                  <div className="relative h-32 sm:h-40 md:h-48 w-full mb-3 flex-shrink-0 rounded-xl overflow-hidden bg-white/5">
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="text-sm sm:text-base font-semibold text-white m-1 line-clamp-2">
                    {product.name}
                  </h2>
                  <p className="text-amber-400 m-1 font-bold">
                    {'₹' + product.price.toLocaleString()}
                  </p>
                </Link>
                <button
                  onClick={() => buyNow(product)}
                  className="neon-btn mt-auto w-full"
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

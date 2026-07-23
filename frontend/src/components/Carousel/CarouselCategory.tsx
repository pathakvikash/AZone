'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

const CarouselCategory = ({ data }: any) => {
  return (
    <div className='glass p-4'>
      <Swiper
        slidesPerView={2}
        spaceBetween={12}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {data.map((deal: any, index: number) => (
          <SwiperSlide key={index} className='cursor-pointer'>
            <div className='relative w-full h-[180px] rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-amber-400/40 transition-colors'>
              <Image
                src={deal.img}
                alt={deal.title}
                fill
                sizes='(max-width: 768px) 50vw, 20vw'
                className='object-cover'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselCategory;

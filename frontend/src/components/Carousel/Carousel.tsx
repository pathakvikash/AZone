'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

const Carousel = () => {
  const images = [
    'https://m.media-amazon.com/images/I/71QRxZvKnGL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/Unrec/R3/D91435399_WLA-BAU-Unrec-Hero_DesktopTallHero_3000x1200._CB577798844_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/July_23/ATF/Unrec/Apay/Shoes/Shoes_3000_1._CB600323828_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/UNREC_PC_3000X1200_BEDDING_HDFC._CB578709527_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/Baby/D92807365-_1_Tallhero_2xx._CB598669664_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Skincare-PCmon._CB578343377_.jpg',
  ];
  return (
    <section className='w-full px-2 sm:px-4 pt-4'>
      <div className='relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_70px_-20px_rgba(245,158,11,0.4)]'>
        <Swiper
          loop={true}
          spaceBetween={0}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 4500,
          }}
          className='h-[200px] sm:h-[320px] lg:h-[420px]'
        >
          {images.map((image, index) => (
            <SwiperSlide key={image} className='flex items-center justify-center'>
              <div className='relative mx-auto w-full h-full bg-ink-950'>
                <Image
                  src={image}
                  alt='Carousel banner'
                  priority={index === 0}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  sizes='100vw'
                  fill
                  className='object-cover object-top'
                />
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide className='bg-black'>
            <video controls muted preload='none' className='w-full h-full object-cover'>
              <source src={'/video.mp4'} type='video/mp4' />
            </video>
          </SwiperSlide>
        </Swiper>
        {/* blend the bright banners into the dark theme */}
        <div className='pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl' />
        <div className='pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-950/80 to-transparent' />
      </div>
    </section>
  );
};

export default Carousel;

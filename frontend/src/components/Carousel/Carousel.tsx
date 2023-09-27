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
    <div className='h-[600px] bg-white w-full'>
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className='h-[50%]'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt='Carousel POR'
              priority
              className='w-full'
              width={500}
              height={500}
            />
          </SwiperSlide>
        ))}
        <SwiperSlide className='bg-black'>
          <video controls muted={true}>
            <source src={'/video.mp4'} type='video/mp4' />
          </video>
        </SwiperSlide>
      </Swiper>
      <div className='h-[20%] bg-gradient-to-b from-gray-100 to-transparent bottom-0 z-500' />
    </div>
  );
};

export default Carousel;

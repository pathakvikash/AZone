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
        <SwiperSlide>
          <Image
            src={images[0]}
            alt='Carousel POR'
            width={100}
            height={100}
            layout='responsive'
            objectFit='contain'
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={images[1]}
            alt='Carousel POR'
            priority
            layout='responsive'
            objectFit='contain'
            width={100}
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide className='bg-black'>
          <video controls muted={true}>
            <source src={'/video.mp4'} type='video/mp4' />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={images[2]}
            alt='Carousel POR'
            priority
            layout='responsive'
            objectFit='contain'
            width={100}
            height={100}
          />
        </SwiperSlide>
      </Swiper>
      <div className='h-[20%] bg-gradient-to-b from-gray-100 to-transparent bottom-0 z-500' />
    </div>
  );
};

export default Carousel;

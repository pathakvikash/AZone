import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const CarouselCategory = ({ data }: any) => {
  return (
    <div className='bg-white m-3'>
      <div className='text-2xl text-black font-semibold p-3'>
        Shop by Category
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {data.map((deal: any, index: any) => (
          <SwiperSlide key={index} className='cursor-pointer'>
            <img src={deal.img} alt={deal.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselCategory;

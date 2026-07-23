'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';

interface Product {
  name: string;
  category: string;
  price: string;
  image_url: string;
  rating: number;
}

const ProductDetailView = ({ product }: { product: Product }) => {
  const [showRating, setShowRating] = useState(false);

  const stars = [];
  for (let i = 0; i < product.rating; i++) {
    stars.push(<FaStar color={'#fbbf24'} key={i} />);
  }

  return (
    <div className='max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
        <div className='lg:col-span-8 flex flex-col gap-4'>
          <div className='glass p-3 flex items-center justify-center'>
            <div className='relative w-full h-[420px] rounded-xl overflow-hidden bg-white/5'>
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                sizes='(max-width: 1024px) 100vw, 66vw'
                priority
                className='object-contain'
              />
            </div>
          </div>

          <div className='glass p-5'>
            <h1 className='text-xl sm:text-2xl text-white font-semibold leading-snug'>
              {product.name}
            </h1>
            <p className='text-amber-400 mt-1'>
              <span className='hover:underline cursor-pointer'>
                Visit the {product.name.split(' ')[0]} store
              </span>
            </p>
            <button
              type='button'
              onClick={() => setShowRating(!showRating)}
              aria-expanded={showRating}
              className='mt-2 flex items-center gap-2 text-white cursor-pointer hover:bg-white/10 rounded-lg px-2 py-1 w-fit transition-colors'
            >
              <span className='text-white/70 text-sm'>{product.rating}</span>
              <span className='flex'>{stars}</span>
              <span className='text-white/50 text-sm'>Ratings</span>
            </button>
            <div className='bg-white/10 border border-white/15 inline-flex h-8 items-center text-amber-400 px-3 rounded-full mt-3 text-sm'>
              AZone&apos;s Choice
            </div>
            <hr className='my-4 border-white/10' />
            <div className='bg-gradient-to-r from-red-600 to-orange-500 text-white inline-flex px-3 py-1 rounded-full text-sm font-medium'>
              Deal of the Day
            </div>
            <div className='flex items-center mt-3 gap-2'>
              <p className='text-2xl font-bold text-amber-400'>₹{product.price}</p>
            </div>
            <hr className='my-4 border-white/10' />
            {showRating && <HoverReview />}
          </div>
        </div>

        <div className='lg:col-span-4'>
          <ProductSideDetails product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;

const HoverReview = () => {
  const rows = [
    { label: '5 star', pct: '60%', width: 'w-3/5' },
    { label: '4 star', pct: '26%', width: 'w-1/4' },
    { label: '3 star', pct: '8%', width: 'w-[8%]' },
    { label: '2 star', pct: '2%', width: 'w-[2%]' },
    { label: '1 star', pct: '3%', width: 'w-[3%]' },
  ];
  return (
    <div className='mt-4'>
      <div className='text-xl text-white'>4.4 out of 5</div>
      <div className='text-white/60'>4,732 global ratings</div>
      {rows.map((row) => (
        <div className='flex mt-2 items-center' key={row.label}>
          <div className='w-1/5 text-amber-400'>{row.label}</div>
          <div className='w-3/5'>
            <div className='bg-white/10 w-full h-3 rounded-full'>
              <div className={`bg-amber-400 h-3 rounded-full ${row.width}`} />
            </div>
          </div>
          <div className='w-1/5 text-white/60'>{row.pct}</div>
        </div>
      ))}
    </div>
  );
};

const ProductSideDetails = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const { price } = product;
  const handleAdd = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };
  return (
    <div className='glass p-5 text-white sticky top-24'>
      <div className='flex items-center gap-3'>
        <p className='text-3xl font-bold text-amber-400'>₹{price}</p>
      </div>
      <p className='text-white/70 mt-1'>
        FREE delivery <span className='font-semibold text-white'>in 2-3 days</span>.{' '}
        <span className='text-amber-400 underline cursor-pointer'>Details</span>
      </p>
      <p className='text-lg text-emerald-400 mt-2 font-medium'>In stock</p>
      <p className='mt-1 text-white/70'>
        Sold by{' '}
        <span className='text-amber-400'>Appario Retailer Private Ltd</span> and{' '}
        <span className='text-amber-400'>Fulfilled by AZone</span>
      </p>
      <button
        onClick={handleAdd}
        className='neon-btn w-full mt-4'
      >
        Add to Cart
      </button>
      <button
        onClick={handleAdd}
        className='neon-btn-outline w-full mt-2'
      >
        Buy Now
      </button>
      <div className='flex items-center gap-3 mt-3'>
        <p className='text-amber-400 text-sm'>Secure transaction</p>
      </div>
      <hr className='my-3 border-white/10' />
      <button className='w-full py-2.5 rounded-full border border-white/15 text-white/80 hover:bg-white/10 hover:text-white transition-colors'>
        Add to Wish List
      </button>
    </div>
  );
};

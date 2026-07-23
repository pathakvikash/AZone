'use client';
import React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFromCart,
  incrementInCart,
  decrementInCart,
} from '@/store/slices/cartSlice';
import { StarIcon } from '@heroicons/react/20/solid';

function Cart() {
  const items = useSelector((state: any) => state.cart.products);
  const cartTotalPrice = items.reduce(
    (total: number, product: any) => total + product.price * product.quantity,
    0
  );

  return (
    <div className='min-h-screen'>
      <main className='lg:flex max-w-screen-2xl mx-auto px-2 sm:px-4 py-5 gap-5'>
        <div className='flex-grow glass overflow-hidden'>
          <div className='relative w-full h-32 sm:h-40'>
            <Image
              alt='Promotional banner'
              src='https://links.papareact.com/ikj'
              fill
              sizes='100vw'
              className='object-cover'
            />
            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent' />
          </div>
          <div className='flex flex-col p-5 space-y-8'>
            <h1 className='text-2xl sm:text-3xl font-bold neon-text inline-block border-b border-white/10 pb-4'>
              {items.length === 0
                ? 'Your AZone Basket is empty.'
                : 'Shopping Cart'}
            </h1>

            {items.map((item: any) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.name}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image_url}
                quantity={item.quantity}
              />
            ))}

            {items.length > 0 && (
              <div>
                <hr className='border-white/10 mb-3' />
                <h2 className='whitespace-nowrap font-medium text-white justify-end flex gap-2'>
                  Subtotal ({items.length} items):{' '}
                  <span className='font-bold text-amber-400'>
                    {'₹' + cartTotalPrice.toLocaleString()}
                  </span>
                </h2>
              </div>
            )}
          </div>
        </div>

        {/* Right */}
        <div className='flex min-w-[300px] flex-col text-white glass p-8 h-min mt-5 lg:mt-0'>
          {items.length > 0 && (
            <>
              <h2 className='whitespace-nowrap text-white/80'>
                Subtotal ({items.length} items):{' '}
                <span className='font-bold text-amber-400'>
                  {'₹' + cartTotalPrice.toLocaleString()}
                </span>
              </h2>
              <button className='neon-btn mt-4'>
                Proceed to checkout
              </button>
            </>
          )}
        </div>
      </main>
      <div className='max-w-screen-2xl mx-auto px-2 sm:px-4'>
        <p className='text-white p-3 font-extrabold'>
          Inspired by your recent orders
        </p>
      </div>
    </div>
  );
}

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  image,
  quantity,
}: any) {
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col sm:flex-row text-white gap-4 sm:gap-5 border-b border-white/10 pb-6 last:border-0'>
      <div className='relative h-40 w-40 sm:h-[200px] sm:w-[200px] flex-shrink-0 mx-auto sm:mx-0 rounded-xl overflow-hidden bg-white/5'>
        <Image
          src={image}
          alt={title}
          fill
          sizes='(max-width: 640px) 160px, 200px'
          className='object-contain'
        />
      </div>

      {/* Middle */}
      <div className='flex-grow'>
        <p className='font-medium text-white'>{title}</p>
        <div className='flex'>
          {Array.from({ length: rating || 0 }).map((_, i) => (
            <StarIcon key={i} className='h-5 text-amber-400' />
          ))}
        </div>
        <p className='text-xs my-2 line-clamp-3 text-white/60'>{description}</p>
        <p className='text-amber-400 font-bold text-lg'>{'₹' + price}</p>
        <p className='flex text-white/70'>Quantity: {quantity}</p>
        <p className='text-emerald-400'>In Stock</p>

        <div className='flex gap-2 p-1 justify-start items-center mt-2'>
          <div className='flex border border-white/15 rounded-lg items-center text-white'>
            <button
              className='px-3 py-2 hover:bg-white/10 transition-colors'
              aria-label='Decrease quantity'
              onClick={() => dispatch(decrementInCart(id))}
            >
              −
            </button>
            <span className='px-3 py-2 border-l border-r border-white/15 min-w-[40px] text-center'>
              {quantity}
            </span>
            <button
              className='px-3 py-2 hover:bg-white/10 transition-colors'
              aria-label='Increase quantity'
              onClick={() => dispatch(incrementInCart(id))}
            >
              +
            </button>
          </div>
          <button
            className='neon-btn-outline'
            onClick={() => dispatch(removeFromCart(id))}
          >
            Delete
          </button>
        </div>
      </div>

      <div className='flex flex-col space-y-2 sm:my-auto sm:self-end'>
        <button className='neon-btn'>Buy Now</button>
      </div>
    </div>
  );
}

export default Cart;

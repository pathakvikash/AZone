'use client';
import React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '@/store/slices/cartSlice';
import { StarIcon } from '@heroicons/react/20/solid';
import ProductGrid from '@/components/GridCards/ProductGrid';
import { productsBottom } from '@/utils/constant';

function Cart() {
  const items = useSelector((state: any) => state.cart.products);
  const cartTotalProducts = useSelector((state: any) => state.cart.products);
  const cartTotalPrice = cartTotalProducts.reduce(
    (total: number, product: any) => total + product.price * product.quantity,
    0
  );
  return (
    <div className='bg-gray-100'>
      <main className='lg:flex max-w-screen-2xl mx-auto'>
        <div className='flex-grow m-5 shadow-sm'>
          <img
            alt='image'
            src='https://links.papareact.com/ikj'
            className='w-full'
          />
          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl text-black border-b pb-4'>
              {items.length === 0
                ? 'Your Amazon Basket is empty.'
                : 'Shopping Cart'}
            </h1>

            {items.map((item: any, i: number) => (
              <CheckoutProduct
                key={i}
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
            <div>
              <hr className='p-2' />
              <h2 className='whitespace-nowrap font-medium text-black justify-end flex'>
                Subtotal ({items.length} items):{' '}
                <span className='font-bold'>{'₹' + cartTotalPrice}</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className='flex min-w-[300px] flex-col text-black bg-white p-10 h-min m-5 shadow-md'>
          {items.length > 0 && (
            <>
              <h2 className='whitespace-nowrap text-[#232F3E]'>
                Subtotal ({items.length} items):{' '}
                <span className='font-bold'>{'₹' + cartTotalPrice}</span>
              </h2>
              <button
                className={`button mt-2 ${'from-gray-300 to-gray-500  border-gray-200 text-black pointer-cursor '} rounded-lg p-3 `}
              >
                Proceed to checkout
              </button>
            </>
          )}
        </div>
      </main>
      <div className='bg-white'>
        <p className=' text-black p-3 font-extrabold '>
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
  category,
  image,
  quantity,
}: any) {
  const dispatch = useDispatch();

  const buyNow = () => {
    alert('Added to Basket proceed to buy');
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className='grid text-black grid-cols-5'>
      <Image src={image} alt='' height={200} width={200} />

      {/* Middle */}
      <div className='col-span-3  mx-5'>
        <p>{title}</p>
        <div className='flex'>
          {Array(rating).fill(<StarIcon className='h-5 text-yellow-500' />)}
        </div>
        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        {'₹' + price}
        <p className='flex text-black'>Quantity: {quantity}</p>{' '}
        <p>{'In Stock'}</p>
        <Image
          src='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png'
          alt=''
          height={90}
          width={90}
        />
        <div className='flex items-center justify-start gap-2'>
          <input type='checkbox' />
          <p>This will be a gift</p>
          <a className='text-[#40379f]'>Learn more</a>
        </div>
        <div className='flex gap-2 p-1 justify-start items-center'>
          <div className='flex border rounded'>
            <button className='px-3 py-2'>Qty:</button>
            <select className='px-3 py-2 border-l' value={quantity}>
              <option value='0'>0 (Delete)</option>
              <option value='1' selected>
                1
              </option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10+'>10+</option>
            </select>
          </div>
          <button className='button rounded-lg ' onClick={removeItemFromBasket}>
            Delete
          </button>
          |{' '}
          <a href='#save' className='text-blue-500 hover:text-blue-700'>
            save for later
          </a>{' '}
          | <a href='#share'>share</a>
        </div>
      </div>

      <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button className='button bg-[#f0c14b] rounded-lg p-2' onClick={buyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Cart;

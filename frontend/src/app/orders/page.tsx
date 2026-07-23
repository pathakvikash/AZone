import React from 'react';
import Link from 'next/link';

const Orders = () => {
  return (
    <div className='bg-background min-h-screen'>
      <div className='max-w-3xl mx-auto px-4 py-12'>
        <h1 className='text-2xl font-semibold text-primary'>Your Orders</h1>
        <div className='mt-6 bg-white rounded-lg shadow-sm p-10 text-center'>
          <p className='text-lg text-gray-700'>You have no orders yet.</p>
          <p className='text-sm text-gray-500 mt-1'>
            Items you order will show up here.
          </p>
          <Link
            href='/products'
            className='inline-block mt-6 bg-[#f0c14b] text-black font-medium rounded-lg px-6 py-2 hover:brightness-95 transition'
          >
            Start shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Orders;

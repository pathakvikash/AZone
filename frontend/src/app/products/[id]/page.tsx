'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface Product {
  name: string;
  category: string;
  price: string;
  image_url: string;
  rating: number;
}

const ProductDetail: React.FC = () => {
  const pathname = usePathname().split('/').pop();
  const [product, setProduct] = useState<Product | null>(null);
  const [showRating, setShowRating] = useState(false);

  const fetchProductById = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/products/${pathname == '' ? '1' : pathname}`
      );
      if (response.ok) {
        const productData: Product = await response.json();
        setProduct(productData);
      } else {
        console.error('Error fetching product data');
      }
    } catch (error) {
      console.error('Error fetching product data', error);
    }
  };

  useEffect(() => {
    fetchProductById();
  }, [pathname]);

  if (!product) {
    return <div>Product not found</div>;
  }
  const stars = [];

  for (let i = 0; i < product.rating; i++) {
    stars.push(<FaStar color={'#ffc107'} key={i} />);
  }

  return (
    <div className='flex'>
      <div className='w-1/2 p-4'>
        <img
          src={product.image_url}
          alt={product.name}
          className='w-full h-auto'
        />
      </div>

      <div className='w-1/2 p-4'>
        <h1 className='text-2xl text-black font-bold'>{product.name}</h1>
        <p className='text-blue-900 hover:bg-blue-100'>
          <a href=''>Visit the {product.name.split(' ')[0]} store </a>
        </p>
        <div
          onClick={() => setShowRating(!showRating)}
          className='flex gap-1 text-black cursor-pointer hover:bg-slate-100'
        >
          <p className='text-gray-600'>{product.rating}</p>
          {stars} 4000 {'Rating'}
        </div>
        <div className='bg-gray-700 max-w-fit flex h-9 text-yellow-500 p-2 mt-4'>
          Amazon&apos;s Choice
        </div>
        <hr className='my-4 bg-slate-800' />
        <div className='bg-red-500 text-white max-w-fit  flex p-2 mt-4'>
          Deal of the Day
        </div>
        <div className='flex items-center m-2 gap-1 justify-start'>
          <div className='text-red-500 '>-60%</div>
          <p className='text-xl text-black'> ₹{product.price}</p>
        </div>
        <hr className='my-4 bg-slate-800' />
        {showRating && <HoverReview />}
      </div>
      <ProductSideDetails product={product} />
    </div>
  );
};

export default ProductDetail;

interface ProductSideDetailsProps {
  product: Product;
}

const HoverReview = () => {
  return (
    <div>
      <div className='mt-4'>
        <div className='text-xl'>4.4 out of 5</div>
        <div className='text-gray-600'>4,732 global ratings</div>
        <div className='flex mt-2'>
          <div className='w-1/5 text-yellow-500'>5 star</div>
          <div className='w-3/5'>
            <div className='bg-yellow-200 w-full h-3 rounded-full'>
              <div className='bg-yellow-500 h-3 rounded-full w-60'></div>
            </div>
          </div>
          <div className='w-1/5 text-gray-600'>60%</div>
        </div>
        <div className='flex mt-1'>
          <div className='w-1/5 text-yellow-500'>4 star</div>
          <div className='w-3/5'>
            <div className='bg-yellow-200 w-full h-3 rounded-full'>
              <div className='bg-yellow-500 h-3 rounded-full w-26'></div>
            </div>
          </div>
          <div className='w-1/5 text-gray-600'>26%</div>
        </div>
        <div className='flex mt-1'>
          <div className='w-1/5 text-yellow-500'>3 star</div>
          <div className='w-3/5'>
            <div className='bg-yellow-200 w-full h-3 rounded-full'>
              <div className='bg-yellow-500 h-3 rounded-full w-8'></div>
            </div>
          </div>
          <div className='w-1/5 text-gray-600'>8%</div>
        </div>
        <div className='flex mt-1'>
          <div className='w-1/5 text-yellow-500'>2 star</div>
          <div className='w-3/5'>
            <div className='bg-yellow-200 w-full h-3 rounded-full'>
              <div className='bg-yellow-500 h-3 rounded-full w-2'></div>
            </div>
          </div>
          <div className='w-1/5 text-gray-600'>2%</div>
        </div>
        <div className='flex mt-1'>
          <div className='w-1/5 text-yellow-500'>1 star</div>
          <div className='w-3/5'>
            <div className='bg-yellow-200 w-full h-3 rounded-full'>
              <div className='bg-yellow-500 h-3 rounded-full w-3'></div>
            </div>
          </div>
          <div className='w-1/5 text-gray-600'>3%</div>
        </div>
        <a href='#'>See customer reviews</a>
      </div>
    </div>
  );
};

const ProductSideDetails: React.FC<ProductSideDetailsProps> = ({ product }) => {
  const { price } = product;
  return (
    <div className='w-1/4 p-6 border border-gray-300 text-black shadow-md'>
      <div className='flex items-center gap-3'>
        <p className='text-2xl font-semibold font-sans'>₹{price}</p>
      </div>
      <p className='text-[#007185]'>
        FREE delivery{' '}
        <span className='font-semibold'>Friday, 15 September</span>.{' '}
        <span className='text-[#007185] underline cursor-pointer'>Details</span>
      </p>
      <p>
        Or faster delivery{' '}
        <span className='font-semibold'>Tomorrow 14 September</span>. Order
        within <span>4 hrs 11 min.</span>{' '}
        <span className='text-[#007185] underline cursor-pointer'>Details</span>
      </p>
      <div className='flex items-center gap-2'>
        <i className='fa fa-map-marker text-gray-500'></i>
        <p className='text-[#007185] underline cursor-pointer'>
          Select delivery location
        </p>
      </div>
      <p className='text-lg text-green-500'>In stock</p>
      <p>
        Sold by{' '}
        <span className='text-[#007185]'>Appario Retailer Private Ltd</span> and{' '}
        <span className='text-[#007185]'>Fulfilled by Amazon</span>
      </p>
      <p>Quantity: 1</p>
      <button className='bg-yellow-300 rounded-lg w-full py-2 mt-4 cursor-pointer'>
        Add to Cart
      </button>
      <button className='bg-orange-300 rounded-lg w-full py-2 mt-2 cursor-pointer'>
        Buy Now
      </button>
      <div className='flex items-center gap-3 mt-2'>
        <i className='fa fa-lock text-gray-500'></i>
        <p className='text-[#007185]'>Secure transaction</p>
      </div>
      <p>Add gift option</p>
      <hr className='my-2 border border-gray-300' />
      <button className='bg-gray-100 rounded-lg w-full py-2 cursor-pointer'>
        Add to Wish List
      </button>
    </div>
  );
};

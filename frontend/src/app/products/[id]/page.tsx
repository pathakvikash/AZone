'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import localDB from '../../../../../productsdb.json';
import { BASE_URL } from '@/utils/constant';

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
  const [loading, setLoading] = useState(true);

  const fetchProductById = async () => {
    const id = pathname == '' ? '1' : pathname;
    try {
      if (BASE_URL) {
        const response = await fetch(`${BASE_URL}/products/${id}`, { cache: 'no-store' });
        if (response.ok) {
          const productData: Product = await response.json();
          setProduct(productData);
          return;
        }
      }
      // Fallback to local JSON if API unavailable or BASE_URL not provided
      const list = (localDB as any).products ?? [];
      const fallback = list.find((p: any) => String(p.id) === String(id));
      if (fallback) setProduct(fallback as Product);
    } catch (error) {
      const list = (localDB as any).products ?? [];
      const fallback = list.find((p: any) => String(p.id) === String(id));
      if (fallback) setProduct(fallback as Product);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductById();
  }, [pathname]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6">
        <div className="animate-pulse grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 h-72 rounded" />
            <div className="space-y-3">
              <div className="bg-gray-100 h-6 rounded w-3/4" />
              <div className="bg-gray-100 h-4 rounded w-1/2" />
              <div className="bg-gray-100 h-4 rounded w-2/3" />
              <div className="bg-gray-100 h-24 rounded" />
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="bg-gray-100 h-64 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div className="max-w-3xl mx-auto px-3 py-10">Product not found</div>;
  }
  const stars = [];

  for (let i = 0; i < product.rating; i++) {
    stars.push(<FaStar color={'#ffc107'} key={i} />);
  }

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="bg-white p-3 rounded-md shadow-sm flex items-center justify-center">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-auto max-h-[420px] object-contain"
            />
          </div>

          <div className="bg-white p-4 rounded-md shadow-sm">
            <h1 className="text-xl sm:text-2xl text-black font-semibold leading-snug">{product.name}</h1>
            <p className="text-blue-900 mt-1">
              <a href="#" className="hover:underline">Visit the {product.name.split(' ')[0]} store</a>
            </p>
            <div
              onClick={() => setShowRating(!showRating)}
              className="mt-2 flex items-center gap-2 text-black cursor-pointer hover:bg-slate-50 rounded px-1 py-0.5 w-fit"
            >
              <p className="text-gray-600 text-sm">{product.rating}</p>
              <span className="flex">{stars}</span>
              <span className="text-gray-500 text-sm">4000 Ratings</span>
            </div>
            <div className="bg-gray-700 inline-flex h-8 items-center text-yellow-500 px-2 rounded mt-3 text-sm">Amazon&apos;s Choice</div>
            <hr className="my-4 border-gray-200" />
            <div className="bg-red-500 text-white inline-flex px-2 py-1 rounded text-sm">Deal of the Day</div>
            <div className="flex items-center mt-3 gap-2">
              <span className="text-red-500 font-medium">-60%</span>
              <p className="text-xl text-black">₹{product.price}</p>
            </div>
            <hr className="my-4 border-gray-200" />
            {showRating && <HoverReview />}
          </div>
        </div>

        <div className="lg:col-span-4">
          <ProductSideDetails product={product} />
        </div>
      </div>
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
  const dispatch = useDispatch();
  const { price } = product;
  const handleAdd = () => {
    dispatch({ type: 'cart/addToCart', payload: { ...product, quantity: 1 } });
  };
  return (
    <div className='p-4 border border-gray-200 rounded-md text-black shadow-sm sticky top-24 bg-white'>
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
      <button onClick={handleAdd} className='bg-yellow-300 rounded-lg w-full py-2 mt-4 cursor-pointer hover:bg-yellow-400 transition-colors'>
        Add to Cart
      </button>
      <button className='bg-orange-300 rounded-lg w-full py-2 mt-2 cursor-pointer hover:bg-orange-400 transition-colors'>
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

'use client';
import Image from 'next/image';
import Link from 'next/link';

type ImageGridProps = {
  images: { url: string; text: string }[];
  title: string;
  href?: string;
};

export const ImageGrid = ({ images, title, href = '/products' }: ImageGridProps) => (
  <div className='bg-white z-30 m-3 rounded-lg shadow-md p-4 flex flex-col h-auto'>
    <h3 className='text-xl text-center overflow-hidden whitespace-nowrap overflow-ellipsis font-bold text-black'>
      {title}
    </h3>
    <div className='grid grid-cols-2 gap-4 py-4'>
      {images.map((image: any, index: any) => (
        <div key={index} className='w-full'>
          <Image src={image.url} alt={image.text} width={200} height={200} className='w-auto h-auto object-contain mx-auto'/>
          <p className='mt-2 text-black text-center overflow-hidden whitespace-nowrap overflow-ellipsis'>
            {image.text}
          </p>
        </div>
      ))}
    </div>
    <Link href={href} className='text-xs xl:text-sm text-blue-600 hover:underline mt-auto self-start'>
      Shop now
    </Link>
  </div>
);

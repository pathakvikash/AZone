'use client';
import Image from 'next/image';
import Link from 'next/link';

type ImageGridProps = {
  images: { url: string; text: string }[];
  title: string;
  href?: string;
};

export const ImageGrid = ({ images, title, href = '/products' }: ImageGridProps) => (
  <div className='glass glass-hover p-5 flex flex-col h-[420px] group'>
    <h3 className='text-lg xl:text-xl text-center overflow-hidden whitespace-nowrap overflow-ellipsis font-semibold text-white'>
      {title}
    </h3>
    <div className='grid grid-cols-2 gap-3 py-4 flex-1'>
      {images.map((image: any) => (
        <div key={image.url} className='w-full flex flex-col'>
          <div className='relative w-full flex-1 rounded-lg overflow-hidden bg-white/5'>
            <Image
              src={image.url}
              alt={image.text}
              fill
              sizes='(max-width: 768px) 50vw, 200px'
              className='object-cover transition-transform duration-500 group-hover:scale-105'
            />
          </div>
          <p className='mt-2 text-xs text-white/70 text-center overflow-hidden whitespace-nowrap overflow-ellipsis'>
            {image.text}
          </p>
        </div>
      ))}
    </div>
    <Link href={href} className='text-sm font-medium text-amber-400 hover:text-amber-300 mt-auto self-start'>
      Shop now →
    </Link>
  </div>
);

import Image from 'next/image';
export const ImageGrid = ({ images, onExploreAll, title }: any) => (
  <div className='bg-white h-[420px] z-30 m-3 rounded-lg shadow-md'>
    <h3 className='text-xl text-center overflow-hidden whitespace-nowrap overflow-ellipsis font-bold text-black p-4'>
      {title}
    </h3>
    <div className='grid grid-cols-2 gap-4 p-4'>
      {images.map((image: any, index: any) => (
        <div key={index} className='w-full'>
          <Image src={image.url} alt={image.text} width={200} height={200} />
          <p className='mt-2 text-black text-center overflow-hidden whitespace-nowrap overflow-ellipsis'>
            {image.text}
          </p>
        </div>
      ))}
    </div>
    <button
      onClick={onExploreAll}
      className='text-xs xl:text-sm text-blue-400 ml-4'
    >
      Shop now
    </button>
  </div>
);

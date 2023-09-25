export const ImageGrid = ({ images, onExploreAll, title }: any) => (
  <div className='max-w-[320px]'>
    <div className='bg-white rounded-lg shadow-md overflow-hidden'>
      <h3 className='text-xl text-center overflow-hidden whitespace-nowrap overflow-ellipsis font-bold text-black p-4'>
        {title}
      </h3>
      <div className='grid grid-cols-2 gap-4 p-4'>
        {images.map((image: any, index: any) => (
          <div key={index} className='w-full'>
            <img src={image.url} alt={image.text} className='w-full h-auto' />
            <p className='mt-2 text-black text-center overflow-hidden whitespace-nowrap overflow-ellipsis'>
              {image.text}
            </p>
          </div>
        ))}
      </div>
      <div className='p-4'>
        <button
          onClick={onExploreAll}
          className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Explore All
        </button>
      </div>
    </div>
  </div>
);

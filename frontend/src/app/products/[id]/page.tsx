import { getProductById } from '@/utils/getProducts';
import ProductDetailView from './ProductDetailView';

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(params.id);

  if (!product) {
    return (
      <div className='max-w-3xl mx-auto px-3 py-10 text-gray-600'>
        Product not found.
      </div>
    );
  }

  return <ProductDetailView product={product} />;
}

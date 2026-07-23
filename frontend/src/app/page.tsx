import ProductGrid from '@/components/GridCards/ProductGrid';
import CarouselCategory from '@/components/Carousel/CarouselCategory';
import Link from 'next/link';

import { gridData, bestSellerData, Deals } from '@/utils/constant';
import { ImageGrid } from '@/components/GridCards/ImageGrid';
import Carousel from '@/components/Carousel/Carousel';
import { getProducts } from '@/utils/getProducts';
import Image from 'next/image';

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="min-h-screen">
      <div className="w-full mx-auto max-w-screen-2xl">
        <Carousel />

        {/* Promo strip */}
        <section className="px-2 sm:px-4 mt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: '🚚', label: 'Free Delivery', sub: 'On orders over ₹499' },
              { icon: '🔄', label: 'Easy Returns', sub: '30-day return policy' },
              { icon: '🔒', label: 'Secure Payment', sub: '100% protected' },
              { icon: '🎧', label: '24/7 Support', sub: 'We are always here' },
            ].map((item) => (
              <div key={item.label} className="glass p-4 flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="text-xs text-white/50">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-2 sm:px-4 mt-10 sm:mt-12">
          <SectionHeading
            eyebrow="Curated for you"
            title="Featured collections"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {gridData.map((data) => (
              <ImageGrid
                key={data.title}
                images={data.url}
                title={data.title}
                href="/products"
              />
            ))}
          </div>
        </section>
      </div>

      <section className="mt-10 sm:mt-14 max-w-screen-2xl mx-auto px-2 sm:px-4">
        <SectionHeading eyebrow="Trending now" title="Shop by category" />
        <CarouselCategory data={bestSellerData} />
      </section>

      {/* Deals grid */}
      <section className="mt-10 sm:mt-14 max-w-screen-2xl mx-auto px-2 sm:px-4">
        <SectionHeading eyebrow="Limited time" title="Deals of the Day" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {Deals.slice(0, 6).map((deal, i) => (
            <Link href="/products" key={`${deal.id}-${i}`} className="glass glass-hover overflow-hidden group">
              <div className="relative w-full h-32 sm:h-40 bg-white/5">
                <Image
                  src={deal.imageUrl}
                  alt={deal.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs sm:text-sm text-white/80 text-center py-2 px-2 truncate">{deal.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10 sm:mt-14 px-2 sm:px-4 max-w-screen-2xl mx-auto">
        <SectionHeading eyebrow="Hand-picked deals" title="Top deals" />
        <ProductGrid products={products} />
      </section>

      {/* Recommended / second product slider */}
      <section className="mt-10 sm:mt-14 px-2 sm:px-4 max-w-screen-2xl mx-auto">
        <SectionHeading eyebrow="Based on trending" title="Recommended for you" />
        <ProductGrid products={[...products].reverse()} />
      </section>

      {/* Newsletter / CTA banner */}
      <section className="mt-10 sm:mt-14 px-2 sm:px-4 pb-12 max-w-screen-2xl mx-auto">
        <div className="glass p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold neon-text inline-block mb-3">
            Stay in the loop
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-6">
            Get exclusive deals, early access to sales, and personalized recommendations delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-full bg-white/[0.06] border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400/60"
            />
            <button className="neon-btn px-8">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}

const SectionHeading = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="mb-5">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/80">
      {eyebrow}
    </p>
    <h2 className="mt-1 text-2xl sm:text-3xl font-bold neon-text">{title}</h2>
  </div>
);

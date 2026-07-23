import './globals.css';
import { Inter } from 'next/font/google';
import AppLayout from '@/components/AppLayout';
import Providers from '@/components/Providers';
import { getProducts } from '@/utils/getProducts';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AZone',
  description: 'AZone — shop everything.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const products = await getProducts();

  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers initialProducts={products}>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}

'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import AppLayout from '@/components/AppLayout';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

type Props = {
  children?: React.ReactNode;
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: Props }) {
  return (
    <html lang='en'>
      <Provider store={store}>
        <Router>
          <body className={inter.className}>
            <AppLayout>{children}</AppLayout>
          </body>
        </Router>
      </Provider>
    </html>
  );
}

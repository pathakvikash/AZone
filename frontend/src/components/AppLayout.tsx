import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AppLayout = ({ children }: any) => {
  return (
    <div className='flex flex-col min-h-screen justify-between'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;

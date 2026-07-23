'use client';
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');
  const [selectedCountry, setSelectedCountry] =
    useState<string>('United States');

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedLanguage(event.target.value);
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <footer className='bg-ink-900/80 backdrop-blur-xl border-t border-white/10 text-white/80 py-8 mt-10'>
      <div className='max-w-screen-2xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4'>
        {/* Section 1: Language and Country Selection */}
        <div className='mb-4 md:mb-0 flex flex-wrap items-center gap-2'>
          <label htmlFor='language' className='text-sm'>
            Language:
          </label>
          <select
            id='language'
            className='bg-white/[0.06] border border-white/15 text-white rounded-lg p-2 [&>option]:text-black'
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value='English'>English</option>
            <option value='Spanish'>Spanish</option>
            <option value='French'>French</option>
          </select>

          <label htmlFor='country' className='text-sm ml-4'>
            Country:
          </label>
          <select
            id='country'
            className='bg-white/[0.06] border border-white/15 text-white rounded-lg p-2 [&>option]:text-black'
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value='United States'>United States</option>
            <option value='Canada'>Canada</option>
            <option value='United Kingdom'>United Kingdom</option>
          </select>
        </div>

        {/* Section 2: Links and Copyright */}
        <div className='text-center md:text-right'>
          <ul className='flex justify-center md:justify-end gap-4'>
            <li>
              <a href='#' className='hover:text-amber-400 transition-colors'>Contact</a>
            </li>
            <li>
              <a href='#' className='hover:text-amber-400 transition-colors'>Books</a>
            </li>
            <li>
              <a href='#' className='hover:text-amber-400 transition-colors'>Sell on AZone</a>
            </li>
          </ul>
          <p className='text-sm mt-4 text-white/50'>
            &copy; {new Date().getFullYear()} AZone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
    <footer className='bg-gray-800 text-white py-6'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
        {/* Section 1: Language and Country Selection */}
        <div className='mb-4 md:mb-0'>
          <label htmlFor='language' className='text-sm'>
            Language:
          </label>
          <select
            id='language'
            className='bg-gray-700 text-white rounded p-2 ml-2'
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
            className='bg-gray-700 text-white rounded p-2 ml-2'
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
          <ul className='flex justify-center md:justify-end'>
            <li className='mr-4'>
              <a href='#'>Contact</a>
            </li>
            <li className='mr-4'>
              <a href='#'>Books</a>
            </li>
            <li className='mr-4'>
              <a href='#'>Sell on Amazon</a>
            </li>
          </ul>
          <p className='text-sm mt-4'>
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

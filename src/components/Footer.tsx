'use client';

import Link from 'next/link';

export const Footer = () => {

  return (
    <>
      <nav className='bg-gray-900 p-3 '>
        <div>
            <Link href='https://github.com/timplay33'>
              <div className='rounded text-white hover:bg-gray-800'>
                Github
              </div>
            </Link>
            <Link href='https://www.instagram.com/tim.0409/'>
              <div className='rounded text-white hover:bg-gray-800'>
                Instagram
              </div>
            </Link>
          </div>
      </nav>
    </>
  );
};
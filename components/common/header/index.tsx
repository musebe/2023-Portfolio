import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <main className='mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
      <div className='sm:text-center lg:text-left'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
          <span className='block xl:inline'>Learn.</span>{' '}
          <span className='block text-indigo-600 xl:inline'>Build.</span>{' '}
          <span className='block xl:inline'>Teach</span>
        </h1>
        <p className='mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0'>
          I&apos;m Eugene Musebe, a fullstack software craftsman dedicated to
          the principles of Learn. Build. Teach. Constantly honing my skills, I
          build innovative solutions and share my knowledge to uplift the tech
          community. Join me on my journey of growth and impact.
        </p>
        <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
          <div className='rounded-md shadow'>
            <Link
              href='/portfolios'
              className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg'
            >
              My Portfolio
            </Link>
          </div>
          <div className='mt-3 sm:mt-0 sm:ml-3'>
            <a
              href='/Resume.pdf'
              target='_blank'
              rel='noreferrer'
              className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg'
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;

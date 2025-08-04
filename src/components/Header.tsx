'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-200">
                <Image src="/favicon.ico" alt="PMH Runners Club Logo" className="w-full h-full object-contain" width={0} height={0} />
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                PHU MY HUNG RUNNERS CLUB
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-0 after:bg-primary-600 after:transition-transform hover:after:scale-100"
            >
              Hall of Fame
            </Link>
            <Link
              href="/runners"
              className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-0 after:bg-primary-600 after:transition-transform hover:after:scale-100"
            >
              All Runners
            </Link>
            <Link
              href="/lop-2024"
              className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-0 after:bg-primary-600 after:transition-transform hover:after:scale-100"
            >
              LOP 2024
            </Link>
            <Link
              href="/lop-2025"
              className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-0 after:bg-primary-600 after:transition-transform hover:after:scale-100"
            >
              LOP 2025
            </Link>
            <Link
              href="/events"
              className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-0 after:bg-primary-600 after:transition-transform hover:after:scale-100"
            >
              Events
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-0 after:bg-primary-600 after:transition-transform hover:after:scale-100"
            >
              About
            </Link>
          </div>

          <div className="hidden md:block">
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-colors"
            >
              Join the Club
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
                Hall of Fame
              </Link>
              <Link href="/runners" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
                All Runners
              </Link>
              <Link href="/lop-2024" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
                LOP 2024
              </Link>
              <Link href="/lop-2025" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
                LOP 2025
              </Link>
              <Link href="/events" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
                Events
              </Link>
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">
                About
              </Link>
              <Link
                href="/join"
                className="block mx-3 mt-4 px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-primary-600 text-center"
              >
                Join the Club
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
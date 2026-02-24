'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-900">
            E-File Reviews
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-600 hover:text-blue-900 transition-colors">
              Home
            </Link>
            <Link href="/reviews" className="text-slate-600 hover:text-blue-900 transition-colors">
              Reviews
            </Link>
            <Link href="/compare" className="text-slate-600 hover:text-blue-900 transition-colors">
              Compare
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-blue-900 transition-colors">
              About
            </Link>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-200">
            <Link href="/" className="block py-2 text-slate-600 hover:text-blue-900">
              Home
            </Link>
            <Link href="/reviews" className="block py-2 text-slate-600 hover:text-blue-900">
              Reviews
            </Link>
            <Link href="/compare" className="block py-2 text-slate-600 hover:text-blue-900">
              Compare
            </Link>
            <Link href="/about" className="block py-2 text-slate-600 hover:text-blue-900">
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'BLOG', path: '/blog' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'ABOUT', path: '/about' },
  ];

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          <Link href="/" className="text-xl font-bold text-gray-900">
            KIVANÇ TÜRKER
          </Link>
          <nav>
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`text-sm font-medium uppercase transition-colors hover:text-sky-500 ${
                      pathname === item.path
                        ? 'border-b-2 border-sky-500 pb-1 text-sky-500'
                        : 'text-gray-500'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

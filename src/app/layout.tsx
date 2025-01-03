import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import ScrollToTop from '@/components/shared/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kıvanç Türker',
  description:
    'Software developer portfolio showcasing projects and blog posts about web development, cloud computing, and software architecture.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

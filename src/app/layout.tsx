import './globals.css';

import { Metadata } from 'next';
import Link from 'next/link';

import styles from './layout.module.css';

export const metadata: Metadata = {
  title: '제품 사이트',
  description: '제품을 판매하는 곳입니다.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className={styles.header}>
          <h1> Demo Note </h1>
          <nav className={styles.nav}>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

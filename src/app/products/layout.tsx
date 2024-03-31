import { Metadata } from 'next';
import Link from 'next/link';

import styles from './layout.module.css';

export const metadata: Metadata = {
  title: '제품 사이트 | 전체 제품 확인',
  description: '제품을 판매하는 곳',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">여성 옷</Link>
        <Link href="/products/man">남성 옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}

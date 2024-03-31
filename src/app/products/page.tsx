import Link from 'next/link';

import { getProducts } from '@/service/products';

import styles from './page.module.css';

export const revalidate = 3;

export default async function ProductPage() {
  const products = await getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com', {
    // next: { revalidate: 0 }, // revalidate를 0으로 하면 SSR이 된다.
    cache: 'no-store', // 이것도 SSR
  });
  const data = await res.json();
  const factText = data.data[0];
  return (
    <>
      <h1>상품 소개 페이지</h1>
      <ul>
        {products.map(({ id, name }) => (
          <li key={id}>
            <Link href={`products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <article className={styles.article}>{factText}</article>
    </>
  );
}

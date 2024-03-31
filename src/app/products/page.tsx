import Link from 'next/link';

import { getProducts } from '@/service/products';

export default async function ProductPage() {
  const products = await getProducts();
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
    </>
  );
}

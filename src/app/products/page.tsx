import Image from 'next/image';
import Link from 'next/link';

import MeowArticle from '@/components/MeowArticle';
import { getProducts } from '@/service/products';

import clothesImage from '../../../public/clothes.jpg';

// export const revalidate = 3;

export default async function ProductPage() {
  // throw new Error();

  const products = await getProducts();
  return (
    <>
      <h1>상품 소개 페이지</h1>
      <Image src={clothesImage} alt="Clothes"></Image>
      <ul>
        {products.map(({ id, name }) => (
          <li key={id}>
            <Link href={`products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}

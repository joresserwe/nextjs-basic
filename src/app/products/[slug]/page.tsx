import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getProduct, getProducts } from '@/service/products';

// export const revalidate = 3; // 3초

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }
  return (
    <>
      <div>{product.name} 제품 설명 페이지</div>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width="300"
        height="300"
      ></Image>
    </>
  );
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
  const products = await getProducts();
  return products.map(({ id }) => ({
    slug: id,
  }));
}

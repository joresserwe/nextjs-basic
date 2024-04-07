import Image from 'next/image';
import os from 'os';

import Counter from '@/components/Counter';

export default function Home() {
  console.log('안녕 - 서버');
  console.log(os.hostname());
  return (
    <>
      <h1>홈페이지다</h1>
      <Counter></Counter>
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        width={400}
        height={400}
        alt="shop"
      ></Image>
    </>
  );
}

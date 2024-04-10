# React 기초

## Page Routing 관련

폴더명이 기본적으로 Routing Path임 폴더에 있는 page 파일이 Routing 대상이 됨.

### Routing Group에 대한 설명 필요
인증 등, 페이지 라우팅에 영향을 주진 않음

### Link

Link Tag를 사용하면 대상 Page는 Pre-fatching이 됨. 그래서 a 태그와는 다르게,
서버에서 가져오는 데이터가 매우 적거나 없을 수 있음

## Component

Component는 app 폴더와 별도로 두는 것을 추천함. 이렇게 하면, app 폴더는 Paging
관련된 내용만 모이게 됨

# 동적 Routing

[slug]를 사용하는 방법<br> [slug]/page.jsx에는 parameter로 아래 형태와 같이
들어옴.

```json
{"params": {"slug" : data}}
```

```javascript
export default function BlogPostPage({ params: { slug } }) {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{slug}</p>
    </main>
  );
}
```

# img 관련

일반 img 태그를 쓰게 된다면, 이미지 경로를 import 한 뒤, 사용 할 수 있다.<br> 이
때 이미지는 변수 뒤 `.src`를 뒤에 붙여야 한다.

```typescript
import logoImg from "../assets/logo.png";

<Link href="/">
  <img src={logoImg.src} alt="A plate with food on it" />
  NextLevel Food
</Link>;
```

하지만 Next에서 제공하는 `Image`를 사용하는 것이 좋다. 이 경우 `.src`를 붙히지 않다고 된다.
기존 이미지보다 더 효율적인 파일로 자동 변환됨(.png -> .webp)

[TODO]  -- priority 에 대한 tㅓㄹ명 추가


```typescript
import Image from 'next/image';
import logoImg from "../assets/logo.png";

<Link href="/">
  <Image src={logoImg} alt="A plate with food on it" />
  NextLevel Food
</Link>;
```


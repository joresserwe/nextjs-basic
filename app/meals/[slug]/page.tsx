type Props = {
  params : {
    slug : string
  } 
}

export default function MealDetailsPage({ params: { slug } }: Props) {
  return <h1>{slug}</h1>;
}

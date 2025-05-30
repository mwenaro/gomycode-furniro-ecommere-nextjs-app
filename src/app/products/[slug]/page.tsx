

export default async function SingleProductPage({params}:any) {
    const{slug} = await params
   
  return (
    <div>single product page for {slug}</div>
  )
}

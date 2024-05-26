import ProductList from "@/components/ProductList";

export default async function Page() {
  const data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );

  return (
    <div className="container mx-auto p-4">
      <ProductList products={data} />
      <div className="mt-4"></div>
    </div>
  );
}

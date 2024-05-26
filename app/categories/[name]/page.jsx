import ProductList from "@/components/ProductList";

export default async function CategoryPage({ params }) {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${params.name}`
  );
  const products = await response.json();

  return <ProductList products={products} />;
}

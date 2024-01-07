import { getProductById } from "@/app/api/products";
import { ProductListItem } from "@/app/ui/molecules/ProductListItem";

export default async function SingleProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const id = params.productId;
  const product = await getProductById(id);

  return (
    <div>
      <h1>Single Product Page</h1>
      {id}
      <ul>
        <ProductListItem product={product} />
      </ul>
    </div>
  );
}

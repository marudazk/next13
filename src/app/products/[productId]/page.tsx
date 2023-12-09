export default function SingleProductPage({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <div>
      <h1>Single Product Page</h1>
      {params.productId}
    </div>
  );
}

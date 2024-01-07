import { type ProductItemType } from "../ui/types/types";
import { type ProductsAPIType } from "./types";

const mapAPIProductToProduct: (
  apiProduct: ProductsAPIType
) => ProductItemType = (apiProduct) => ({
  id: apiProduct.id,
  name: apiProduct.title,
  category: apiProduct.category,
  price: apiProduct.price,
  coverImage: { src: apiProduct.image, alt: apiProduct.title },
});

export const getProductsList = async () => {
  const res = await fetch(
    "https://naszsklep-api.vercel.app/api/products?take=20"
  );
  const productsResponse = (await res.json()) as ProductsAPIType[];
  const products: ProductItemType[] = productsResponse.map(
    mapAPIProductToProduct
  );
  return products;
};

type GetProductById = (id: string) => Promise<ProductItemType>;

export const getProductById: GetProductById = async (id) => {
  const res = await fetch(
    "https://naszsklep-api.vercel.app/api/products/" + id
  );
  const productResp = (await res.json()) as ProductsAPIType;
  return mapAPIProductToProduct(productResp);
};

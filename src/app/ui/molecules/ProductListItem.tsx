import { type ProductItemType } from "../types/types";
import { ProductCoverImage } from "@/app/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/app/ui/atoms/ProductListItemDescription";

type ProductListItemProps = {
  product: ProductItemType;
};
export const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <li>
      <article>
        <ProductCoverImage {...product.coverImage} />
        <ProductListItemDescription product={product} />
      </article>
    </li>
  );
};

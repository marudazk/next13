import Link from "next/link";
import { type ProductItemType } from "../types/types";
import { ProductCoverImage } from "@/app/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/app/ui/atoms/ProductListItemDescription";

type ProductListItemProps = {
  product: ProductItemType;
};
export const ProductListItem = ({ product }: ProductListItemProps) => {
  const href = "/products/" + product.id;
  return (
    <li>
      <Link href={{ pathname: href }}>
        <article>
          <ProductCoverImage {...product.coverImage} />
          <ProductListItemDescription product={product} />
        </article>
      </Link>
    </li>
  );
};

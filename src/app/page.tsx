import { ProductList } from "./ui/organisms/ProductList";
import { type ProductItemType } from "@/app/ui/types/types";

const products: ProductItemType[] = [
  {
    id: "1",
    category: "Accessories",
    price: 10,
    name: "Ozdoba",
    coverImage: {
      src: "/product_1.avif",
      alt: "",
    },
  },
  {
    id: "4",
    category: "Accessories",
    price: 1043,
    name: "Kalendarz adwentowy",
    coverImage: {
      src: "/product_2.avif",
      alt: "",
    },
  },
  {
    id: "4",
    category: "Accessories",
    price: 5452,
    name: "Kapcie",
    coverImage: {
      src: "/product_3.avif",
      alt: "",
    },
  },
  {
    id: "4",
    category: "Accessories",
    price: 5433,
    name: "Kubek",
    coverImage: {
      src: "/product_4.avif",
      alt: "",
    },
  },
];
export default function Home() {
  return (
    <section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
      <ProductList data-testid="products-list" products={products} />
    </section>
  );
}

import { TProduct } from "@/Types";
import GridList from "./GridList";
import Product from "./Product";
type RelatedProductsProps = {
  products: TProduct[];
};
const RelatedProducts = ({ products }: RelatedProductsProps) => {
  return (
    <div className="">
      <GridList
        records={products}
        graidStyle="xl:grid-cols-4 lg:grid-cols-3 grid-cols-2"
        renderitem={(record) => (
          <Product {...record} imageSize="max-lg:h-40 w-52" />
        )}
      />
    </div>
  );
};

export default RelatedProducts;

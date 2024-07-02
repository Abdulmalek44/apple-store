import { Loading } from "@/components/feedback";
import { Product, RelatedProducts } from "@/components/ecommerce";
import { TProduct } from "@/Types";
import useProductDetails from "@/Hooks/componentsHooks/useProductDetails";

const ProductDetails = () => {
  const { loading, error, singleProduct } = useProductDetails();

  return (
    <Loading error={error} status={loading} type="shopDetails">
      <div className="w-full min-h-screen flexStart flex-col my-3">
        <div className="max-w-6xl w-full mx-auto">
          <div className="max-lg:mx-5 mb-5">
            <Product
              {...singleProduct}
              isProductDetails={true}
              imageSize="h-64"
            />
          </div>
          <div className="my-8">
            <h1 className="text-2xl mb-5 max-xl:mx-4">Related Products</h1>
            <RelatedProducts
              products={singleProduct.related_products as TProduct[]}
            />
          </div>
        </div>
      </div>
    </Loading>
  );
};

export default ProductDetails;

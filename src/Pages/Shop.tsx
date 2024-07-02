import { Loading } from "@/components/feedback";
import { TProduct } from "@/Types";
import {
  CategoryFilter,
  GridList,
  Paginations,
  Product,
} from "@/components/ecommerce";
import useShop from "@/Hooks/componentsHooks/useShop";

const Shop = () => {
  const {
    categoryError,
    categoryLoading,
    categoryRecords,
    filterCategories,
    setFilterCategories,
    productError,
    productLoading,
    firstIndex,
    lastIndex,
    totalProducts,
    paginationFilter,
    productRecords,
    currentPage,
    TotalPages,
    setCurrentPage,
  } = useShop();
  return (
    <>
      <div className="w-full min-h-screen flexStart flex-col my-3">
        <div className="max-w-6xl mx-auto flex justify-between  w-full max-xl:flex-col ">
          <div className="min-w-80 flex mt-4 ">
            <Loading
              error={categoryError}
              status={categoryLoading}
              type="ShopCategoriesCheckBox"
            >
              <CategoryFilter
                records={categoryRecords}
                filterCategories={filterCategories}
                setFilterCategories={setFilterCategories}
                status={productLoading}
              />
            </Loading>
          </div>
          <div className="flexCenter mb-4 ">
            <Loading
              error={productError}
              status={productLoading}
              type="shopProducts"
              skeletonCount={6}
            >
              <h2 className="place-self-start font-bold my-4 max-xl:ml-5 ">
                {`Showing ${
                  firstIndex + 1
                } • ${lastIndex} of ${totalProducts} Products`}
              </h2>
              <GridList<TProduct>
                records={paginationFilter}
                renderitem={(record) => (
                  <Product {...record} imageSize="xl:w-96 xl:h-40" />
                )}
              />
              {productRecords && (
                <div className="mt-10">
                  <Paginations
                    currentPage={currentPage}
                    TotalPages={TotalPages}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              )}
            </Loading>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;

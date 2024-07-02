import { GridList, Paginations, Product } from "@/components/ecommerce";
import { Loading } from "@/components/feedback";
import useNewCollection from "@/Hooks/componentsHooks/useNewCollection";
import { TProduct } from "@/Types";

const NewCollection = () => {
  const {
    newCollection,
    loading,
    error,
    TotalProducts,
    firstIndex,
    lastIndex,
    currentPage,
    setCurrentPage,
  } = useNewCollection();
  return (
    <section className="w-full min-h-screen flexCenter flex-col max-xl:mb-12">
      <div className="max-w-6xl mx-auto flexCenter flex-col ">
        <h1 className="xl:text-3xl text-2xl font-semibold mb-10 ">
          New Collections
        </h1>
        <Loading
          status={loading}
          error={error}
          skeletonCount={3}
          type="shopProducts"
        >
          <div className="max-w-6xl mx-auto flexCenter flex-col ">
            <h2 className="place-self-start font-bold my-4 max-xl:ml-5">{`Showing ${firstIndex} • ${lastIndex} of ${TotalProducts} Products`}</h2>
            <GridList<TProduct>
              records={newCollection}
              renderitem={(record) => <Product {...record} />}
            />
          </div>
          {newCollection && (
            <div className="mt-10">
              <Paginations
                currentPage={currentPage}
                TotalPages={5}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
        </Loading>
      </div>
    </section>
  );
};

export default NewCollection;

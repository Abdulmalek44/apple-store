import { Category, GridList } from "@/components/ecommerce";
import { Loading } from "@/components/feedback";
import useShopCategories from "@/Hooks/componentsHooks/useShopCategories";
import { TCategory } from "@/Types";

const ShopCategories = () => {
  const { categoryRecords, error, loading } = useShopCategories();
  return (
    <section className="w-full min-h-screen flexCenter flex-col max-xl:mb-12">
      <div className="max-w-6xl mx-auto w-full flexCenter flex-col ">
        <h1 className="xl:text-3xl text-2xl place-self-start font-semibold mb-10 max-lg:ml-4">
          Shop by Categories
        </h1>
        <Loading
          status={loading}
          error={error}
          skeletonCount={6}
          type="ShopCategories"
        >
          <GridList<TCategory>
            records={categoryRecords}
            renderitem={(record) => <Category {...record} />}
          />
        </Loading>
      </div>
    </section>
  );
};

export default ShopCategories;

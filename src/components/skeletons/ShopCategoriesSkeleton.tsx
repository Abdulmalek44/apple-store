import { Skeleton } from "../ui/skeleton";

const ShopCategoriesSkeleton = () => {
  const SkeletonMap = Array.from({ length: 6 }, (_, indx) => (
    <div
      key={indx}
      className={`${
        indx > 2 ? "max-lg:hidden" : "flex flex-col space-y-3 max-lg:w-[22rem]"
      }`}
    >
      <Skeleton className="h-[250px] xl:w-[370px] rounded-sm" />
    </div>
  ));
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
      {SkeletonMap}
    </div>
  );
};

export default ShopCategoriesSkeleton;

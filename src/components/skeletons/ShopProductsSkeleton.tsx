import { Skeleton } from "../ui/skeleton";

type TShopProductsSkeleton = {
  skeletonCount?: number | undefined;
};
const ShopProductsSkeleton = ({ skeletonCount }: TShopProductsSkeleton) => {
  const count = skeletonCount !== undefined ? skeletonCount : 6;
  const SkeletonMap = Array.from({ length: count }, (_, indx) => (
    <div key={indx} className="flex flex-col space-y-3 max-lg:w-[22rem] ">
      <Skeleton
        className={`${
          skeletonCount === 3
            ? "h-[250px] xl:w-[370px] rounded-sm"
            : "h-[200px] xl:w-[260px] rounded-sm"
        }`}
      />
      <div className="space-y-3">
        <Skeleton className="h-3 w-[150px]" />
        <Skeleton className="h-3 w-[250px]" />
        <Skeleton className="h-3 w-[80px]" />
      </div>
    </div>
  ));
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-8 ">
      {SkeletonMap}
    </div>
  );
};

export default ShopProductsSkeleton;

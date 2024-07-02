import { Skeleton } from "../ui/skeleton";

type TShopCategoriesSkeleton = {
  skeletonCount?: number | undefined;
};
const ShopCategoriesCheckBoxSkeleton = ({
  skeletonCount,
}: TShopCategoriesSkeleton) => {
  const count = skeletonCount !== undefined ? skeletonCount : 6;
  const SkeletonMap = Array.from({ length: count }, (_, indx) => (
    <div key={indx} className="flexCenter gap-x-3">
      <Skeleton className="h-6 w-6" />
      <Skeleton className="h-3 w-[150px]" />
    </div>
  ));
  return (
    <div className="flex flex-col gap-y-7 my-5 max-xl:ml-4">{SkeletonMap}</div>
  );
};

export default ShopCategoriesCheckBoxSkeleton;

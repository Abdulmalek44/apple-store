import { Skeleton } from "../ui/skeleton";

const ProfileDetalilsSkeleton = () => {
  const SkeletonMap = Array.from({ length: 3 }, (_, indx) => (
    <div key={indx} className="flex gap-y-2 flex-col ">
      <Skeleton className="h-3 w-[130px]" />
      <Skeleton className="h-12 w-full" />
    </div>
  ));
  return (
    <div className="flex flex-col gap-y-4 mt-2 ">
      <Skeleton className="h-4 w-[200px] mb-2" />
      <div className="flex flex-col gap-y-7 ">{SkeletonMap}</div>
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-12 w-[130px]" />
    </div>
  );
};

export default ProfileDetalilsSkeleton;

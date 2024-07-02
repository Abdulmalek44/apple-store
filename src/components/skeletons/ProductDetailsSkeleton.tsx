import { Skeleton } from "../ui/skeleton";

const ProductDetailsSkeleton = () => {
  const SkeletonMap = Array.from({ length: 4 }, (_, indx) => (
    <div key={indx} className="flex flex-col space-y-3  ">
      <Skeleton className="h-[150px] xl:w-[260px] rounded-sm" />
      <div className="space-y-3">
        <Skeleton className="h-3 w-11/12" />
        <Skeleton className="h-3 w-4/5" />
        <Skeleton className="h-3 w-1/3" />
      </div>
    </div>
  ));
  return (
    <div className="w-full flexStart flex-col my-3">
      <div className="max-w-6xl w-full mx-auto">
        <div className="max-lg:mx-5 mb-12 ">
          <div className="grid lg:grid-cols-7">
            <Skeleton className=" lg:h-72 h-64 rounded-sm lg:col-span-3" />
            <div className="flex flex-col justify-between lg:col-span-4 lg:mx-6">
              <Skeleton className="h-3 w-11/12 max-lg:mt-2" />
              <Skeleton className="h-3 w-1/3 max-lg:mt-5" />
              <Skeleton className="h-3 w-1/6 max-lg:mt-5" />
              <div className="space-y-3 max-lg:mt-6">
                <Skeleton className="h-3 w-1/5" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-4/5" />
                <Skeleton className="h-3 w-11/12 " />
              </div>
              <Skeleton className="h-10 w-full max-lg:mt-10" />
            </div>
          </div>
        </div>
        <div className="my-12 max-lg:mx-4">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 max-lg:gap-4">
            {SkeletonMap}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;

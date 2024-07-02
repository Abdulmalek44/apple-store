import { TLoading } from "@/Types";
import { ReactNode } from "react";
import LottieHandler from "./LottieHandler";
import {
  ShopCategoriesCheckBoxSkeleton,
  ShopCategoriesSkeleton,
  ShopProductsSkeleton,
  ProductDetailsSkeleton,
  ProfileDetalilsSkeleton,
} from "@/components/skeletons";

const skeletonsTypes = {
  ShopCategoriesCheckBox: ShopCategoriesCheckBoxSkeleton,
  ShopCategories: ShopCategoriesSkeleton,
  shopProducts: ShopProductsSkeleton,
  shopDetails: ProductDetailsSkeleton,
  profileDetails: ProfileDetalilsSkeleton,
};

type LoadingProps = {
  status: TLoading;
  error: string | null;
  children: ReactNode;
  type: keyof typeof skeletonsTypes;
  skeletonCount?: number | undefined;
};

const Loading = ({
  error,
  status,
  children,
  type,
  skeletonCount,
}: LoadingProps) => {
  const Component = skeletonsTypes[type];
  if (status === "pending") {
    return <Component skeletonCount={skeletonCount} />;
  }

  if (status === "failed") {
    return (
      <LottieHandler message={error as string} type="error" Style=" md:h-5/6" />
    );
  }
  return <div>{children}</div>;
};

export default Loading;

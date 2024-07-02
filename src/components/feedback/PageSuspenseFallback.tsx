import { ReactNode, Suspense } from "react";
import LottieHandler from "./LottieHandler";

const PageSuspenseFallback = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<LottieHandler type="loadingDots" Style="w-4/12" />}>
      {children}
    </Suspense>
  );
};

export default PageSuspenseFallback;

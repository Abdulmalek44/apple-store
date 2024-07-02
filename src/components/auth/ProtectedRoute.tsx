import { useAppSelector } from "@/Store/hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { accessToken } = useAppSelector((state) => state.Auth);

  if (accessToken) {
    return children;
  }
  return <Navigate to="/login?message=login_required" />;
};

export default ProtectedRoute;

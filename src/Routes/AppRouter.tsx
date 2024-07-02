import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { PageSuspenseFallback } from "@/components/feedback";
import MainLayout from "@/Layouts/MainLayout";
import ProfileLayout from "@/Layouts/ProfileLayout";
import { Error } from "@/Pages";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("@/Pages/Home"));
const Cart = lazy(() => import("@/Pages/Cart"));
const Shop = lazy(() => import("@/Pages/Shop"));
const ProductDetails = lazy(() => import("@/Pages/ProductDetails"));
const Login = lazy(() => import("@/Pages/Login"));
const Register = lazy(() => import("@/Pages/Register"));
const CustomerReviews = lazy(() => import("@/Pages/CustomerReviews"));
const PersonalInformation = lazy(() => import("@/Pages/PersonalInformation"));
const Orders = lazy(() => import("@/Pages/Orders"));
const Purchases = lazy(() => import("@/Pages/Purchases"));
const CheckOut = lazy(() => import("@/Pages/CheckOut"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <PageSuspenseFallback>
            <Home />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "shop/product/:slug",
        element: (
          <PageSuspenseFallback>
            <ProductDetails />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <PageSuspenseFallback>
              <Cart />
            </PageSuspenseFallback>
          </ProtectedRoute>
        ),
      },
      {
        path: "shop",
        element: (
          <PageSuspenseFallback>
            <Shop />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <PageSuspenseFallback>
              <CheckOut />
            </PageSuspenseFallback>
          </ProtectedRoute>
        ),
      },

      {
        path: "reviews",
        element: (
          <PageSuspenseFallback>
            <CustomerReviews />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "login",
        element: (
          <PageSuspenseFallback>
            <Login />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "register",
        element: (
          <PageSuspenseFallback>
            <Register />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <PageSuspenseFallback>
              <ProfileLayout />
            </PageSuspenseFallback>
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: (
              <PageSuspenseFallback>
                <PersonalInformation />
              </PageSuspenseFallback>
            ),
          },
          {
            index: true,
            path: "orders",
            element: (
              <PageSuspenseFallback>
                <Orders />
              </PageSuspenseFallback>
            ),
          },
          {
            index: true,
            path: "purchases",
            element: (
              <PageSuspenseFallback>
                <Purchases />
              </PageSuspenseFallback>
            ),
          },
        ],
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

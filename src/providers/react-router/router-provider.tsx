import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../../pages/layout";
import { ElementType, lazy, Suspense } from "react";
import { Progress } from "@radix-ui/themes";

function Loadable(Component: ElementType) {
  return function fn(props: any) {
    return (
      <Suspense fallback={<Progress />}>
        <Component {...props} />
      </Suspense>
    );
  };
}

const HomePage = Loadable(lazy(() => import("../../pages/home")));
const CoinDetail = Loadable(lazy(() => import("../../pages/coin-detail")));
const AppRoutes = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: (
          <Layout>
            <HomePage />
          </Layout>
        ),
      },
      {
        path: ":id/info",
        element: (
          <Layout>
            <CoinDetail />
          </Layout>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(AppRoutes);

export function Router() {
  return <RouterProvider router={router} />;
}

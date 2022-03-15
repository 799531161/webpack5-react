import React, { lazy } from "react";
import { RouteObject } from "react-router";
const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/about"));
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    // children: [
    //   {
    //     path: "/goods",
    //     element: <Goods />,
    //     children: [
    //       { index: true, element: <GoodsList /> },
    //       { path: ":id", element: <GoodsDetail /> },
    //     ],
    //   },
    //   {
    //     path: "/customer",
    //     element: <Customer />,
    //   },
    //   {
    //     path: "*",
    //     element: <NotFound />,
    //   },
    // ],
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default routes;

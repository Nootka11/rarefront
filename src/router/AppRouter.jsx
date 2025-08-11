import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "../App";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Shop from "../pages/Shop/Shop";
import Recipes from "../pages/Recipes/Recipes";
import FarmLife from "../pages/FarmLife/FarmLife";
import Contact from "../pages/Contact/Contact";
import MyAnimations from "../components/Animations/Animations";
// import ScrollAnimations from  "../components/Animations/ScrollAnimations"
import UseScrollBasic from "../components/Animations/UseScrollBasic";
import UseScrollAdvanced from "../components/Animations/UseScrollAdvanced";
import TextAnimation from "../components/Animations/TextAnimation";

import { SlideTabsExample } from "../components/NavBar/SlideTabs";

import ProductDetail from "../pages/ProductDetail/ProductDetail";
import PlantsList from "../pages/Plants/PlantsList";
import PlantDetail from "../pages/Plants/PlantDetail";
import AnimalsList from "../pages/Animals/AnimalsList";
import TestDome02 from "../pages/TestDome/TestDome02";
import TestDome03 from "../pages/TestDome/TestDome03";
import AnimalVotes from "../pages/Votes/AnimalVotes";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/farm-life/animals",
        element: <AnimalsList />,
      },
       {
        path: "/farm-life/plants",
        element: <PlantsList />,
      },
      {
        path: "/vegetables/:id",
        element: <PlantDetail />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    
       {
        path: "/animations-2",
        element: <TextAnimation />,
      },
      {
        path: "/animations-3",
        element: <UseScrollAdvanced />,
      },

       {
        path: "/animations-5",
        element: <SlideTabsExample />,
      },
      {
        path: "/animations-6",
        element: <MyAnimations />,
      },
      {
        path: "/testDome",
        element: <TestDome03 />,
      },
      {
        path: "/animal-vote",
        element: <AnimalVotes />,
      },
    ],
  },
]);

// const root = document.getElementById("root");

// ReactDOM.createRoot(root).render(
//   <RouterProvider router={router} />
// );



export default router;

//===============================
// CODIGO VERSION 6
//++++++++++++++++++++++++

// import { Route, Routes } from "react-router-dom";
// import App from "../App";
// import Layout from "../pages/Layout";

// function AppRouter() {
//   return (
//     <Routes>
//       <Route element={<Layout/>}>
//         <Route path="/" element={<App />} />
       
//       </Route>
//     </Routes>
//   );
// }

// export default AppRouter;
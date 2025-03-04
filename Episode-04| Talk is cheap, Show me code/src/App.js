import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

export const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// // const appRouter = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <AppLayout />,
// //   },
// //   {
// //     path: "/about",
// //     element: <About />,
// //   },
// // ]);

// // const AppRoutes = () => {
// //   return useRoutes([
// //     { path: "/", element: <AppLayout /> },
// //     { path: "/about", element: <About /> },
// //   ]);
// // };

import React from "react";
import ReactDOM from "react-dom/client";

const Parent = () => {
  return <BrowserRouter>sd</BrowserRouter>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Parent />);

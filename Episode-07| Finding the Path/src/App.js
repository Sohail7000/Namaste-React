import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]);

// const AppRoutes = () => {
//   return useRoutes([
//     { path: "/", element: <AppLayout /> },
//     { path: "/about", element: <About /> },
//   ]);
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

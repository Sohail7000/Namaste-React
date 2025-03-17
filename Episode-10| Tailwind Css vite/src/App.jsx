import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
// import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";



// chunking
// Code Spliting
// Dynamic bundling
// lazy loading
// on demand loading
// dynamic import
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(()=> import ("./components/About"))

export const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Body />} />
            <Route path="/about" element={
              <Suspense>
                <About />
              </Suspense>
              } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
            <Route
              path="/grocery"
              element={
                <Suspense fallback={<h1>Loading ...</h1>}>
                  <Grocery />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

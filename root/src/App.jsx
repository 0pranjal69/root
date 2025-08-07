import React from "react";
import Nav from "./components/Nav";
import Land from "./components/Land.jsx";
import Catalogue from "./components/Catalogue.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import PotDetail from "./components/PotDetail.jsx"; // <-- import PotDetail
import LocomotiveScroll from "locomotive-scroll";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav />
          <Home />
        </>
      ),
    },
    {
      path: "/catalogue",
      element: (
        <>
          <Nav />
          <Catalogue />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Nav />
          <Contact />
        </>
      ),
    },
    {
      path: "/pot/:title", // <-- dynamic route for pot details
      element: (
        <>
          <Nav />
          <PotDetail />
        </>
      ),
    },
  ]);

  return (
    <div>
      <Land />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

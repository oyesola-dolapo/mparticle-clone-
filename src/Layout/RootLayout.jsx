import React from "react";
import Nav from "../Components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

export default function RootLayout() {
  return (
    <div className="selection:bg-secondaryColor relative">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

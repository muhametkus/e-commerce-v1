"use client"
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import NavbarUst from "@/components/Navbar/NavbarUst";
import store from "@/redux/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <NavbarUst />
      <Navbar />
      <div className="container mx-auto mt-10">{children}</div>
      <Footer />
    </Provider>
  );
};

export default Layout;

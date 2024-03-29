import Footer from "@/component/layout/Footer";
import Header from "@/component/layout/Header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      <main>
        <div>{children}</div>
      </main>

      <Footer />
    </>
  );
};

export default Layout;

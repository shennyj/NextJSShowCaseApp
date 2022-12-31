import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
const mainLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main> {children}</main>
      <Footer />
    </>
  );
};

export default mainLayout;

import React from "react";
import { Link } from "react-router-dom";
import Features from "../homepage/Features";
import KitchenBg from "../homepage/KitchenBg";

const Layout = () => {
  return (
    <>
      <section className="layout_section">
        <div className="container">
          <div className="row">
            <Features />
          </div>
        </div>
        <KitchenBg />
      </section>
    </>
  );
};

export default Layout;

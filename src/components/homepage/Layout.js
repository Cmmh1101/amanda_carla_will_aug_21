import React from "react";
import Features from "./Features";

import Rules from "./Rules";
import Team from "./Team";

const Layout = () => {
  return (
    <>
      <section className="layout_section">
        <Features />
      </section>
      <Rules />
      <Team />
    </>
  );
};

export default Layout;

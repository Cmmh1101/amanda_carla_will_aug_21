import React from "react";
import Features from "./Features";
import KitchenBg from "./KitchenBg";
import Rules from "./Rules";
import Team from "./Team";

const Layout = () => {
  return (
    <>
      <section className="layout_section">
        <Features />
        <KitchenBg />
      </section>
      <section className="rules_section">
        <Rules />
      </section>
      <section className="team_section">
        <Team />
        
      </section>
    </>
  );
};

export default Layout;

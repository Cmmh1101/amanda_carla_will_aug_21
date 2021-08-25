import React from "react";
import { NavbarBrand } from "reactstrap";
import UserAvatar from "./UserAvatar";
function Header() {
  return (
    <React.Fragment>
      <div className="header_bg">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center text-md-left py-3">
              <NavbarBrand href="/" className="logo m-0">
                Room Manager
              </NavbarBrand>
              <UserAvatar />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="user_image d-flex align-items-center">
        <img src="../images/userphoto.png" alt="user" className="user" />
        <Link href="#" className="ml-2 d-none d-lg-block">
          LogOut
        </Link>
      </div>
    );
  }
}

export default UserAvatar;

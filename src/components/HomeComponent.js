import React, { Component } from "react";
import Rooms from "./room1/RoomComponent";
import Room2 from "./room2/Room2Component";
import Room3 from "./room3/Room3Component";
import Room4 from "./room4/Room4Component";
import Room5 from "./room5/Room5Component";
import Room6 from "./room6/Room6Component";
import Room7 from "./room7/Room7Component";
import Room8 from "./room8/Room8Component";

class Home extends Component {
  render() {
    return (
      <>
        <div className="home_bg">
          <div className="container">
            <div className="row m-0 mt-md-1">
              <div className="col-12 title">
                <h1>Manage Rooms</h1>
              </div>
              <div className="col-12 col-lg-10 mx-auto room_display">
                <Rooms />
                <Room2 />
                <Room3 />
                <Room4 />
                <Room5 />
                <Room6 />
                <Room7 />
                <Room8 />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;

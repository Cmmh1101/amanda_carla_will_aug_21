import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import { Fade } from "react-animation-components";

const Team = () => {
  return (
    <>
    <section className="team_section">
      <div className="col-10 mx-auto team_container" id="team">
        <h2>
          <i class="fa fa-beer" aria-hidden="true" />
          Meet Our Dev Team
        </h2>

        <div className="col-12 team_cards">
          <Fade in className="col-12 d-flex justify-content-center flex-wrap">
            
            <Card className="cards">
              <CardImg
                top
                className="card-image"
                src="/images/amandacircle2.png"
                alt="Amanda Shuman"
              />
              <CardBody className="member-card">
                <CardTitle tag="h5">Amanda Shuman</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Full-Stack Developer
                </CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as lead-in{" "}
                </CardText>
                <div className="icons">
                  <Link
                    to={{
                        pathname: "https://www.linkedin.com/in/amanda-shuman/",
                    }}
                    target="_blank"
                    className="nav-link m-2"
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </Link>
                  <Link
                      to={{ pathname: "https://github.com/AmandaShuman" }}
                    target="_blank"
                    className="nav-link m-2"
                  >
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </Link>
                </div>
              </CardBody>
            </Card>
            <Card className="cards">
              <CardImg
                top
                className="card-image"
                src="/images/carlam.png"
                alt="Carla Montano"
              />
              <CardBody className="member-card">
                <CardTitle tag="h5">Carla Montano</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Full-Stack Developer
                </CardSubtitle>
                <CardText>
                  This card has supporting text below as a natural lead-in{" "}
                </CardText>
                <div className="icons">
                  <Link
                    to={{
                      pathname: "https://www.linkedin.com/in/carla-montano",
                    }}
                    target="_blank"
                    className="nav-link m-2"
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </Link>
                  <Link
                    to={{ pathname: "https://github.com/cmmh1101" }}
                    target="_blank"
                    className="nav-link m-2"
                  >
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </Link>
                </div>
              </CardBody>
            </Card>
            <Card className="cards">
              <CardImg
                top
                className="card-image"
                src="/images/willpcircle.png"
                alt="Will Prouty"
              />
              <CardBody className="member-card">
                <CardTitle tag="h5">Will Prouty</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Full-Stack Developer
                </CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural{" "}
                </CardText>
                <div className="icons">
                  <Link
                    to={{
                      pathname:
                        "https://www.linkedin.com/in/will-prouty-07882b93/",
                    }}
                    target="_blank"
                    className="nav-link m-2"
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </Link>
                  <Link
                    to={{ pathname: "https://github.com/illfriday" }}
                    target="_blank"
                    className="nav-link m-2"
                  >
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </Link>
                </div>
              </CardBody>
            </Card>
            </Fade>
          
        </div>
      </div>
      </section>
    </>
  );
};

export default Team;

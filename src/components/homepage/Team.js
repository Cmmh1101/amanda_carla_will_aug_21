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
            Meet Our Dev <span className="strong_word">Team</span>
            
          </h2>
<hr />
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
                  <CardTitle tag="h4">Amanda <span className="strong_word">Shuman</span></CardTitle>
                  <CardSubtitle tag="h5" className="mb-2 text-muted">
                    <strong>Full-Stack &amp; Python Developer</strong>
                  </CardSubtitle>
                  <CardText>
                    Mathematician, teacher, developer - problem solving and
                    teamwork are some of my specialties.
                    Python/JavaScript/GoogleScript teaching and coding
                    experience.
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
                  <CardTitle tag="h3">Carla <span className="strong_word">Montano</span></CardTitle>
                  <CardSubtitle tag="h5" className="mb-2 text-muted">
                    <strong>Front-end Web &amp; Mobile Developer</strong>
                  </CardSubtitle>
                  <CardText>
                    HTML/CSS/JS and Spanish teacher - I enjoy learning, solving
                    problems, inspiring, helping others, and team work.
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
                  className="card-image border-gradient-purple"
                  src="/images/willpcircle.png"
                  alt="Will Prouty"
                />
                <CardBody className="member-card">
                  <CardTitle tag="h3">Will <span className="strong_word">Prouty</span></CardTitle>
                  <CardSubtitle tag="h5" className="mb-2 text-muted">
                    <strong>Front-end Web &amp; Mobile Developer</strong>
                  </CardSubtitle>
                  <CardText>
                    Freelance designer, technician, and coder extraordinaire.
                    Works hard, team player, and well-versed in Reactjs.
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

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'gatsby';


const NavBar = (currentPage) => {
console.log(currentPage)
  if (currentPage.values.currentPage === 'moreProjects') {
    return (
      <>
        <Nav class="navbar color-nav">
          <Navbar>
            <Container>
              <Link className="cta-btn cta-btn--nav-bar" to="/">
                HOME
              </Link>
              <Link className="cta-btn cta-btn--nav-bar-select" to="/projects">
                Projects
              </Link>
              <Link className="cta-btn cta-btn--nav-bar" to="/">
                Links
              </Link>
              <Link className="cta-btn cta-btn--nav-bar" to="/">
                Bio
              </Link>
            </Container>
          </Navbar>
        </Nav>
      </>
    );
  }

  return (
    <>
      <Nav class="navbar color-nav">
        <Navbar>
          <Container>
            <Link className="cta-btn cta-btn--nav-bar" to="/">
              MAIN PAGE
            </Link>
            <Link className="cta-btn cta-btn--nav-bar" to="/projects">
              Projects
            </Link>
            <Link className="cta-btn cta-btn--nav-bar" to="/">
              Links
            </Link>
            <Link className="cta-btn cta-btn--nav-bar" to="/">
              Bio
            </Link>
          </Container>
        </Navbar>
      </Nav>
    </>
  );
};

export default NavBar;

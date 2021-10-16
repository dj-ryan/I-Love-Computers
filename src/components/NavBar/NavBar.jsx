import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'gatsby';

const NavBar = () => {
  // const [isDesktop, setIsDesktop] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   if (window.innerWidth > 769) {
  //     setIsDesktop(true);
  //     setIsMobile(false);
  //   } else {
  //     setIsMobile(true);
  //     setIsDesktop(false);
  //   }
  // }, []);

  return (
    <>

        <Nav class="navbar color-nav">
          <Navbar>
            <Container>
                <Link className="cta-btn cta-btn--main-page" to="/">Main Page</Link>
            </Container>
          </Navbar>
        </Nav>
 
    </>
  );
};

export default NavBar;

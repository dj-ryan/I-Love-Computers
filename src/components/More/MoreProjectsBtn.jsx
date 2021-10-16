import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';



import { Link } from 'gatsby';

const MoreProjects = () => {

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <Fade left={isDesktop} bottom={isMobile} duration={500} delay={200} distance="30px">
      <Link to='/moreProjects' className="cta-btn cta-btn--more-projects">
        More Projects
      </Link>
    </Fade>
  );
};

export default MoreProjects;

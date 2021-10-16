import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar/NavBar';
import '../style/main.scss';

import React, { useState, useEffect } from 'react';
import MoreProjects from './Projects/MoreProjects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { moreProjectsData, contactData, footerData } from '../mock/data';

function moreProjects() {
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setProjects([...moreProjectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <>
      <NavBar />

      <PortfolioProvider value={{ projects, contact, footer }}>
        <MoreProjects />
        <Contact />
        <Footer />
      </PortfolioProvider>
    </>
  );
}

export default moreProjects;

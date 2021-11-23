import React from 'react';
import MoreProjectsApp from '../components/MoreProjectsApp';
import '../style/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';

export default () => {
  const { title, lang, description } = headData;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description} />
      </Helmet>

      <MoreProjectsApp />
    </>
  );
};

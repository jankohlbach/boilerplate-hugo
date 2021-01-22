import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Remarkable} from 'remarkable';
import parse from 'html-react-parser';

import Header from '../components/Header';
import Footer from '../components/Footer';

const HomepagePreview = ({widgetsFor, document}) => {
  const md = new Remarkable();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '../main.js';
    script.setAttribute('defer', '');
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <Header />
      <main>
        {
          // eslint-disable-next-line no-underscore-dangle
          widgetsFor('components')._tail && widgetsFor('components')?.map((component, i) => {
            const get = (key) => component?.getIn(['data', key]);

            const type = get('type');

            switch (type) {
              case 'text':
                return (
                  <div className="content-wrap" key={i}>
                    {parse(md.render(get('content')))}
                  </div>
                );
              case 'image':
                return (
                  <div className="content-wrap" key={i}>
                    <img src={get('src')} alt={get('alt')} />
                  </div>
                );
              default:
                return null;
            }
          })
        }
      </main>
      <Footer />
    </>
  );
};

HomepagePreview.propTypes = {
  widgetsFor: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  document: PropTypes.object.isRequired,
};

export default HomepagePreview;

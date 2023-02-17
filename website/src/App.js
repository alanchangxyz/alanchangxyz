import React from 'react';
import {
  useLocation,
  Routes,
  Route,
} from 'react-router-dom';
import ReactGA from 'react-ga4';
import { AnimatePresence } from 'framer-motion';

import Redirect from './app/components/Redirect/Redirect';
import Home from './app/views/Home/Home';

const App = () => {
  // ReactGA.initialize('G-H3X1SVSLE4');
  const location = useLocation();

  return (
    <>
      <div className="App">
        <div className="container">
          <div className="content-wrap">
            {/* <Nav /> */}
            <AnimatePresence exitBeforeEnter>
              <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Redirect url="/" />} />
              </Routes>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

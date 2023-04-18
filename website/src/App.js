import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import { AnimatePresence } from "framer-motion";

import Redirect from "./app/components/Redirect/Redirect";
import Home from "./app/views/Home/Home";

function App() {
  ReactGA.initialize("G-H3X1SVSLE4");
  const location = useLocation();

  return (
    <div className="App">
      {/* <Nav /> */}
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/email" element={<Redirect url="mailto:alanc16@uci.edu" />} />
          <Route path="/github" element={<Redirect url="https://github.com/alanchangxyz" />} />
          <Route path="/linkedin" element={<Redirect url="https://linkedin.com/in/acxyz" />} />
          <Route path="/the-county" element={<Redirect url="https://www.notion.so/acxyz/the-county-9c590d5f68b04125bb671fc2fd51d9fc" />} />
          <Route path="/venmo" element={<Redirect url="venmo://paycharge?txn=pay&recipients=alanchangxyz" />} />
          <Route path="/venmo-p" element={<Redirect url="https://venmo.com/alanchangxyz" />} />
          <Route path="*" element={<Redirect url="/" />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

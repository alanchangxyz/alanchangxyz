import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import { AnimatePresence } from "framer-motion";

import Redirect from "./app/components/Redirect/Redirect";
import Home from "./app/views/Home/Home";

const App = () => {
  ReactGA.initialize("G-H3X1SVSLE4");
  const location = useLocation();

  return (
    <div className="App">
      {/* <Nav /> */}
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/calendly" element={<Redirect url="https://calendly.com/acxyz/open" />} />
          <Route path="/email" element={<Redirect url="mailto:alan@alanchang.xyz" />} />
          <Route path="/github" element={<Redirect url="https://github.com/alanchangxyz" />} />
          <Route path="/linkedin" element={<Redirect url="https://linkedin.com/in/acxyz" />} />
          <Route path="/venmo" element={<Redirect mobileUrl="venmo://paycharge?txn=pay&recipients=alanchangxyz" url="https://venmo.com/alanchangxyz?txn=pay" />} />
          <Route path="/netwics-slides" element={<Redirect url="https://docs.google.com/presentation/d/1t65EzhxGAYjgDQDcdoa9pvL2jk5JMLLUkUAQfLCoOTQ/edit?pli=1#slide=id.p" />} />
          <Route path="/netwics-demo" element={<Redirect url="https://codesandbox.io/s/netwics-workshop-s1ef3m?file=/src/App.js" />} />
          <Route path="*" element={<Redirect url="/" />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;

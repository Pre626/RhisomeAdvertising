import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Agency from './component/agency/Agency';
import Service from './component/Service/Service'

import Homepage from "./pages/Homepage";
import FrontPage from "./pages/FrontPage";
import Why from "./component/whychoose/Why";
import About from "./component/Aboutus/About";

function AppWrapper() {
  const location = useLocation();
  const showLayout = location.pathname === "/homepage";

  return (
    <>
      {showLayout && <Navbar />}
      {showLayout && <Agency />}
      {showLayout && <Service />}
      {showLayout && <Why />}
      {showLayout && <About />}

      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import FrontPage from "./pages/FrontPage";
import AboutPage from "./pages/Aboutpage";
import Ourworkpage from "./pages/Ourworkpage";
import ServicePage from "./pages/ServicePage";

function AppWrapper() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/aboutpage" element={<AboutPage />} />
      <Route path="/ourwork" element={<Ourworkpage />} />
      <Route path="/servicepage" element={<ServicePage />} />
    </Routes>
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

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profiles from "./pages/Profiles";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Achievements from "./pages/Achievements";
import Skills from "./pages/Skills";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/profiles" element={<Profiles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

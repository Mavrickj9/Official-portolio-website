import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import { Home, About, Contact, ProjectPage, ErrorPage } from "./pages";

// components
import { Sidebar, ThemeTemplate } from "./components";

import "./utils/templateColors.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <ThemeTemplate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

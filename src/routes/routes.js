import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NotFound from "../views/ErrorPage/NotFound";
import Home from "../views/Home/Home";

const MainRoutes = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </Router>
);

export default MainRoutes;

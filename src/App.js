import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import ScrollButton from "./components/ScrollButton/scroll";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <ScrollButton />
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;

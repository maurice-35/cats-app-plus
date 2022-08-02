import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import CatIndex from "./component/cats/CatIndex";
import Home from "./component/common/Home";
import Footer from "./component/common/Footer";
import Navigation from "./component/common/Navigation";

export const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}
export const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route exact path="/cats" element={<CatIndex />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

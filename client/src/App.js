import React from "react";
import Navbar from "./components/Navbar";
import Navhead from "./components/Navhead";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navhead />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;

import React, { Suspense, lazy, useState, useEffect } from "react";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import "./styles.css";
const Navbar = lazy(() => import("./components/Navbar"));
const Navhead = lazy(() => import("./components/Navhead"));
const Home = lazy(() => import("./pages/Home"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   switch (document.readyState) {
  //     case "loading":
  //       setLoading(true);
  //     case "interactive":
  //       setLoading(true);
  //     case "complete":
  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 2300);

  //     default:
  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 2300);
  //   }
  // }, [document.readyState]);
  return (
    <>
      <Suspense fallback={<Loader />}>
        {/* {loading ? ( */}
        {/* <Loader /> */}
        {/* ) : ( */}
        <>
          <Navhead />
          <Navbar />
          <Modal />
          <Home />

          <Footer />
        </>
        {/* )} */}
      </Suspense>
    </>
  );
}

export default App;

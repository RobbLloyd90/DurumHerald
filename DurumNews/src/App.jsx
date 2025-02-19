import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../src/index.css";
import Home from "./routers/Home";
import Header from "./routers/Header";
import Articles from "./routers/Articles";
import Footer from "./routers/Footer";
import useFetchData from "./customHooks/useFetchData";

function App() {
  const { data, error } = useFetchData(
    "https://durum-herald.onrender.com/api/articles"
  );
  return (
    <>
      <body>
        <Header />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/articles" element={<Articles data={data} />} />
        </Routes>
        <Footer />
      </body>
    </>
  );
}

export default App;

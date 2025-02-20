import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../src/index.css";
import Home from "./routers/Home";
import Header from "./routers/Header";
import Articles from "./routers/Articles";
import Article from "./routers/Article";
import Footer from "./routers/Footer";
import useFetchData from "./customHooks/useFetchData";

function App() {
  const {
    data: articles,
    error,
    isPending,
  } = useFetchData("https://durum-herald.onrender.com/api/articles");
  return (
    <>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <body>
        <Header />
        <Routes>
          <Route path="/" element={<Home data={articles} />} />
          <Route path="/articles" element={<Articles data={articles} />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
        <Footer />
      </body>
    </>
  );
}

export default App;

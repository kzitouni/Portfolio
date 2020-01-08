import React, { useState } from "react";
import "./App.scss";
import Opening from "./Opening";
import Header from "./Header/Header";
import HeaderBar from "./Header/HeaderBar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import "animate.css/animate.min.css";
function App() {
  const [page, setPage] = useState(<Opening />);

  setTimeout(() => {
    setPage(
      <div className="Page">
        <HeaderBar />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }, 2900);
  return <div className="App">{page}</div>;
}

export default App;

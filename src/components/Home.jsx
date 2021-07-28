import React from "react";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Header from "./Header";
import HistoryHeader from "./HistoryHeader";
import Products from "./Products";
import Profile from "./Profile";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <main className="A4-page">
        <Header />

        <div className="row align-start justify-between w-800 m24-auto">
          <div className="column">
            <Profile />
            <Education />
            <Contact />
          </div>
          <div className="column">
            <Experience />
            <Skills />
          </div>
        </div>
      </main>
      <main className="A4-page" style={{ marginTop: 120 }}>
        <HistoryHeader />

        <div className="row align-start justify-between w-800 m24-auto">
          <div className="column">
            <Products />
          </div>
          <div className="column">
            <Projects />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

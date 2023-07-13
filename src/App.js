import React from "react";
import Particle from "./components/Particle";
// import Pdf from "./documents/resume.png"
import Pdf from "./documents/Spencer_Goodwin_Resume.pdf"
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
  return (
    <>
      <Particle />
      <div className="container">
        <div className="mt-5 pt-5">
          <h1 className="mt-5 font-link" style={{ fontSize: "150px", textAlign: "center"}}>
            Hey, I'm Spencer Goodwin.
          </h1>
          <div className="text-center" style={{ fontSize: "90px" }}>
            <a href="https://github.com/Spencerg00dwin">
              <i className="bi bi-github px-5 icon"></i>
            </a>
            <a href={Pdf} target="_blank" rel="noreferrer">
              <i className="bi bi-file-earmark-person px-5 icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/spencer-goodwin/">
              <i className="bi bi-linkedin px-5 icon"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

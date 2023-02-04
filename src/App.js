import React from "react";
// import Particle from "./components/Particle";
// import Pdf from "./documents/spencer-resume.pdf"
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
  return (
    <>
      {/* <Particle /> */}
      <Navbar />
      {/* <div className="container bg-white rounded" style={{ height: "750px"}}> */}
      <div className="container">
        <div className="row pt-4">
          <div className="col-sm">
            <h1 className="font-link" style={{ fontSize: "40px"}}>
              Hey, I'm Spencer Goodwin.
            </h1>
          </div>
          <div className="text-center col-sm" style={{ fontSize: "50px" }}>
            <a href="https://github.com/Spencerg00dwin">
              <i className="bi bi-github px-5 icon"></i>
            </a>
            {/* <a href={Pdf}> */}
              {/* <embed src={Pdf}>
                <i className="bi bi-file-earmark-person px-5 icon"></i>
              </embed> */}
            {/* </a> */}
            <a href="https://www.linkedin.com/in/spencer-goodwin/">
              <i className="bi bi-linkedin px-5 icon"></i>
            </a>
            </div>
          </div>
      </div>
    </>
  );
}
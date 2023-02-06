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
          </div>
      </div>
    </>
  );
}
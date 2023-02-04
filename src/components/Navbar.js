import React, { Component } from 'react'


export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="row pt-4">
          <div className="col-sm">
            <h1 className="font-link text-left" >
             spencergoodwin.dev
            </h1>
          </div>
          <div className="text-right col-sm" style={{ fontSize: "50px" }}>
            <a href="https://github.com/Spencerg00dwin">
              <i className="bi bi-github px-5 icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/spencer-goodwin/">
              <i className="bi bi-linkedin px-5 icon"></i>
            </a>
            </div>
          </div>
      </nav>
    )}

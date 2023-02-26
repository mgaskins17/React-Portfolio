import React from "react";
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import Footer from "./components/Footer"
// import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Resume from "./components/pages/Resume"
import Portfolio from "./components/pages/Portfolio"
import "./style.css"

import {
    BrowserRouter as Router,
    Route,
    Routes,
    // Navigate
  } from "react-router-dom";

// App.js will use the chapter 21 approach of creating a router system to transfer to different pages

export default function App() {
    return ( // Need to return the output that is wanted
        <Router>
        <div> 
        <Navbar />
        <Routes>
            <Route path='/React-Portfolio/' element={<Home />} />
            {/* <Route path='/aboutme' element={<About />} /> */}
            <Route path="/React-Portfolio/contact" element={<Contact />} />
            <Route path="/React-Portfolio/resume" element={<Resume />} />
            <Route path="/React-Portfolio/portfolio" element={<Portfolio />} />
            {/* <Route path='*' element={<Navigate to = "/"/>} /> */}
        </Routes>
        <Footer />
        </div>
    </Router>
    );
}


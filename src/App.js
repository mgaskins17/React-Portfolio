import React, {useState} from "react";
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import Footer from "./components/Footer"
// import About from "./components/pages/About"
// import Contact from "./components/pages/Contact"
import Resume from "./components/pages/Resume"
// import Portfolio from "./components/pages/Portfolio"
import "./style.css"

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
  } from "react-router-dom";

// App.js will use the chapter 21 approach of creating a router system to transfer to different pages

// const App = () => <PortfolioContainer />;

function App() {
    return ( // Need to return the output that is wanted
        <Router>
        <div> 
        {/* <Header /> */}
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/aboutme' element={<About />} /> */}
            {/* <Route path='/contact' element={<Contact />} /> */}
            <Route path='/resume' element={<Resume />} />
            {/* <Route path='/portfolio' element={<Portfolio />} /> */}
            <Route path='*' element={<Navigate to = "/"/>} />
        </Routes>
        <Footer />
        </div>
    </Router>
    );
}


// function App() {
//     return (
      
//         {/* Wrap page elements in Router component to keep track of location state */}
//         <Router>
//           <div className="flex-column justify-flex-start min-100-vh">
//             <Header />
//             <div className="container">
//               {/* Wrap Route elements in a Routes component */}
//               <Routes>
//                 {/* Define routes using the Route component to render different page components at different paths */}
//                 {/* Define a default route that will render the Home component */}
//                 <Route 
//                   path="/" 
//                   element={<Home />} 
//                 />
//                 {/* Define a route that will take in variable data */}
//                 <Route 
//                   path="/profiles/:profileId" 
//                   element={<Profile />} 
//                 />
//               </Routes>
//             </div>
//             <Footer />
//           </div>
//         </Router>

//     );
//   }

export default App;

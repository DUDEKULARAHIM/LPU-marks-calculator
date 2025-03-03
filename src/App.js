// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;










// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./components/HomePage";
// import CAMarksCalculator from "./components/CAMarksCalculator";
// import PassingMarks from "./components/PassingMarks";
// import PracticalSubject from "./components/PracticalSubject";
// import TheoryObjective from "./components/TheoryObjective";
// import TheorySubjective from "./components/TheorySubjective";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
// import "./App.css";

// function App() {
//   return (
//     <div>
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/ca-marks-calculator" element={<CAMarksCalculator />} />
//         <Route path="/passing-marks" element={<PassingMarks />} />
//         <Route path="/practical-subject" element={<PracticalSubject />} />
//         <Route path="/theory-objective" element={<TheoryObjective />} />
//         <Route path="/theory-subjective" element={<TheorySubjective />} />
//       </Routes>
//     </Router>
//     <footer className="footer">
//             <p>Made by Murthy Mohan</p>
//             <div className="social-icons">
//               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                 <FaFacebook size={24} style={{ color: "#4267B2" }} />
//               </a>
//               <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//                 <FaTwitter size={24} style={{ color: "#1DA1F2" }} />
//               </a>
//               <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                 <FaInstagram size={24} style={{ color: "#C13584" }} />
//               </a>
//               <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//                 <FaLinkedin size={24} style={{ color: "#0A66C2" }} />
//               </a>
//             </div>
//           </footer>
//     </div>
//   );
// }

// export default App;






// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./components/HomePage";
// import CAMarksCalculator from "./components/CAMarksCalculator";
// import PassingMarks from "./components/PassingMarks";
// import PracticalSubject from "./components/PracticalSubject";
// import TheoryObjective from "./components/TheoryObjective";
// import TheorySubjective from "./components/TheorySubjective";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
// import "./App.css";
// import ExpectedMarks from "./components/ExpectedMarks";

// function App() {
//   return (
//     <div className="app-container">
//       <Router>
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/ca-marks-calculator" element={<CAMarksCalculator />} />
//             <Route path="/passing-marks" element={<PassingMarks />} />
//             <Route path="/practical-subject" element={<PracticalSubject />} />
//             <Route path="/theory-objective" element={<TheoryObjective />} />
//             <Route path="/theory-subjective" element={<TheorySubjective />} />
//             <Route path="/expected-objective" element={<ExpectedMarks />} />

//           </Routes>
//         </div>
//       </Router>
//       <footer className="footer">
//         <p>Made by Murthy Mohan</p>
//         <div className="social-icons">
//           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//             <FaFacebook size={24} style={{ color: "#4267B2" }} />
//           </a>
//           <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//             <FaTwitter size={24} style={{ color: "#1DA1F2" }} />
//           </a>
//           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//             <FaInstagram size={24} style={{ color: "#C13584" }} />
//           </a>
//           <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin size={24} style={{ color: "#0A66C2" }} />
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;









import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CAMarksCalculator from "./components/CAMarksCalculator";
import PassingMarks from "./components/PassingMarks";
import PracticalSubject from "./components/PracticalSubject";
import TheoryObjective from "./components/TheoryObjective";
import TheorySubjective from "./components/TheorySubjective";
import ExpectedMarks from "./components/ExpectedMarks";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./App.css";

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
        setIsInstallable(false);
      });
    }
  };

  return (
    <div className="app-container">
      <Router>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ca-marks-calculator" element={<CAMarksCalculator />} />
            <Route path="/passing-marks" element={<PassingMarks />} />
            <Route path="/practical-subject" element={<PracticalSubject />} />
            <Route path="/theory-objective" element={<TheoryObjective />} />
            <Route path="/theory-subjective" element={<TheorySubjective />} />
            <Route path="/expected-objective" element={<ExpectedMarks />} />
          </Routes>
        </div>
      </Router>

      {isInstallable && (
        <div className="install-popup">
          <center>
          <p>Install this app for a better experience.</p>
          <button onClick={handleInstallClick}>Install</button>
          </center>
        </div>
      )}

      <footer className="footer">
        <p>Made by Rahim</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} style={{ color: "#4267B2" }} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} style={{ color: "#1DA1F2" }} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} style={{ color: "#C13584" }} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} style={{ color: "#0A66C2" }} />
          </a>
        </div>
      </footer>

      


    </div>
  );
}

export default App;

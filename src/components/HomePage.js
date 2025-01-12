// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./HomePage.css";
// const HomePage = () => {
//   const navigate = useNavigate();

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Marks Calculator Application</h1>
//       <button onClick={() => navigate("/ca-marks-calculator")}>
//         CA Marks Calculator
//       </button>
//       <br />
//       <br />
//       <button onClick={() => navigate("/passing-marks")}>Passing Marks</button>
//       <br />
//       <br />
//       <button onClick={() => alert("Expected Marks - Coming Soon!")}>
//         Expected Marks
//       </button>
//     </div>
//   );
// };

// export default HomePage;








// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
// import "./HomePage.css";

// const HomePage = () => {
//   const navigate = useNavigate();

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Marks Calculator Application</h1>
//       <button onClick={() => navigate("/ca-marks-calculator")}>
//         CA Marks Calculator
//       </button>
//       <br />
//       <br />
//       <button onClick={() => navigate("/passing-marks")}>Passing Marks</button>
//       <br />
//       <br />
//       <button onClick={() => alert("Expected Marks - Coming Soon!")}>
//         Expected Marks
//       </button>

//       <footer style={{ marginTop: "50px", padding: "20px", backgroundColor: "#f8f9fa" }}>
//         <p>Made by Murthy Mohan</p>
//         <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
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
// };

// export default HomePage;







import React from "react";
import { useNavigate } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="content">
        {/* <h1>LPU</h1> */}
        <h2> LPU Marks Calculator Application</h2>
        <button onClick={() => navigate("/ca-marks-calculator")}>
          CA Marks Calculator
        </button>
        <br />
        <br />
        <button onClick={() => navigate("/passing-marks")}>Passing Marks</button>
        <br />
        <br />
        <button onClick={() => navigate("/expected-objective")}>
          Expected Marks
        </button>
      </div>

      {/* <footer className="footer">
        <p>Made by Murthy Mohan</p>
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
      </footer> */}
    </div>
  );
};

export default HomePage;

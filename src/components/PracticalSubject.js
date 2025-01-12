// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./PracticalSubject.css";
// const PracticalSubject = () => {
//   const [courseCode, setCourseCode] = useState("");
//   const [caMarks, setCaMarks] = useState("");
//   const [midtermMarks, setMidtermMarks] = useState("");
//   const [endtermMarks, setEndtermMarks] = useState("");
//   const [result, setResult] = useState("");

//   const navigate = useNavigate();

//   const calculateResult = () => {
//     const totalMarks =
//       (parseFloat(caMarks) || 0) +
//       (parseFloat(midtermMarks) || 0) +
//       (parseFloat(endtermMarks) || 0);

//     const isPass = (parseFloat(endtermMarks) || 0) >= 40;

//     if (isPass) {
//       setResult(`Pass! Total Marks: ${totalMarks}`);
//     } else {
//       const requiredMarks = 40 - (parseFloat(endtermMarks) || 0);
//       setResult(
//         `Fail! You need ${requiredMarks} more marks in the End-Term to pass. Total Marks: ${totalMarks}`
//       );
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Practical Subject</h1>
//       <button onClick={() => navigate("/passing-marks")}>Back</button>
//       <br />
//       <br />
//       <div>
//         <label>Course Code: </label>
//         <input
//           type="text"
//           value={courseCode}
//           onChange={(e) => setCourseCode(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>CA Marks: </label>
//         <input
//           type="number"
//           value={caMarks}
//           onChange={(e) => setCaMarks(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Midterm Marks: </label>
//         <input
//           type="number"
//           value={midtermMarks}
//           onChange={(e) => setMidtermMarks(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>End-Term Marks: </label>
//         <input
//           type="number"
//           value={endtermMarks}
//           onChange={(e) => setEndtermMarks(e.target.value)}
//         />
//       </div>
//       <br />
//       <button onClick={calculateResult}>Calculate</button>
//       <h2>{result}</h2>
//     </div>
//   );
// };

// export default PracticalSubject;







import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PracticalSubject.css";

const PracticalSubject = () => {
  const [courseCode, setCourseCode] = useState("");
  const [attendanceMarks, setAttendanceMarks] = useState(""); // Attendance marks input
  const [caMarks, setCaMarks] = useState(""); // CA Marks input
  const [endtermMarks, setEndtermMarks] = useState(""); // Endterm marks input
  const [result, setResult] = useState(""); // Display the result

  const navigate = useNavigate();

  const calculateResult = () => {
    const attendance = parseFloat(attendanceMarks) || 0;
    const ca = parseFloat(caMarks) || 0;
    const endterm = parseFloat(endtermMarks) || 0;

    // Calculate total marks
    const totalMarks = attendance + ca + endterm;

    // Check if student passes based on Endterm marks
    const isPass = endterm >= 20; // 40% of 50 = 20 marks required in endterm

    if (isPass) {
      setResult(`Pass! Total Marks: ${totalMarks}`);
    } else {
      const requiredMarks = 20 - endterm; // Calculate how many more marks required in End-Term to pass
      setResult(
        `Fail! You need ${requiredMarks} more marks in the End-Term to pass. Total Marks: ${totalMarks}`
      );
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Practical Subject</h1>
      <button onClick={() => navigate("/passing-marks")}>Back</button>
      <br />
      <br />
      <div>
        <label>Course Code or short Name : </label>
        <input
          type="text"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          placeholder="Enter Marks"
        />
      </div>
      <div>
        <label>Attendance Marks (Max 5): </label>
        <input
          type="number"
          max="5"
          value={attendanceMarks}
          onChange={(e) => setAttendanceMarks(e.target.value)}
          placeholder="Enter Marks"

        />
      </div>
      <div>
        <label>CA Marks (Max 45): </label>
        <input
          type="number"
          max="45"
          value={caMarks}
          onChange={(e) => setCaMarks(e.target.value)}
          placeholder="Enter Marks"

        />
      </div>
      <div>
        <label>End-Term Marks (Max 50): </label>
        <input
          type="number"
          max="50"
          value={endtermMarks}
          onChange={(e) => setEndtermMarks(e.target.value)}
          placeholder="Enter Marks"

        />
      </div>
      <br />
      <button onClick={calculateResult}>Calculate</button>
      <h2>{result}</h2>
    </div>
  );
};

export default PracticalSubject;



// const ExpectedMarks = () => {
//   const [courseCode, setCourseCode] = useState("");
//   const [attendance, setAttendance] = useState("");
//   const [caMarks, setCaMarks] = useState("");
//   const [midtermMarks, setMidtermMarks] = useState("");
//   const [endtermWeightage, setEndtermWeightage] = useState("");
//   const [expectedEndMarks, setExpectedEndMarks] = useState("");
//    const [result, setResult] = useState("");

//   const navigate = useNavigate();

//   const calculateExpectedMarks = () => {
//     // Parse inputs
//     const attendanceMarks = parseFloat(attendance) || 0;
//     const caMarksVal = parseFloat(caMarks) || 0;
//     const midtermMarksVal = parseFloat(midtermMarks) || 0;
//     const endWeightage = parseFloat(endtermWeightage) || 0;

//     const totalMarks = attendanceMarks + caMarksVal + midtermMarksVal;

//     // Criteria: 30% of End-Term Weightage
//     const requiredEndMarks = Math.ceil(0.3 * endWeightage);
//     const requiredForTotal = Math.max(40 - totalMarks, 0);

//     // If total is sufficient, end-term must meet its own criteria
//     if (totalMarks + requiredEndMarks >= 40) {
//       setExpectedEndMarks(
//         `You need at least ${requiredEndMarks} marks out of ${endWeightage} in the End-Term to pass.`
//       );
//     } else {
//       // If total is insufficient, calculate the marks needed to meet both criteria
//       const marksNeeded = Math.max(requiredForTotal, requiredEndMarks);
//       setExpectedEndMarks(
//         `You need at least ${marksNeeded} marks out of ${endWeightage} in the End-Term to pass.`
//       );
//     }

//     // Final result based on the calculated marks
//     if (
//       requiredEndMarks <= endWeightage &&
//       totalMarks + requiredEndMarks >= 40
//     ) {
//       setResult("Expected to Pass.");
//     } else {
//       setResult("Expected to Fail. Prepare for more in EndTerm.");
//     }
//   };

//   return (
//     <div className="expected-container">
//       <h1>Expected Marks Calculator</h1>
//       {/* <button onClick={() => navigate("/practical-subject")}>
//         Practical Expected
//       </button>
//       <button onClick={() => navigate("/theory-objective")}>
//         Objective Expected
//       </button> */}
//       <div className="form">
//         <div>
//           <label>Course Code: </label>
//           <input
//             type="text"
//             value={courseCode}
//             onChange={(e) => setCourseCode(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Attendance Marks: </label>
//           <input
//             type="number"
//             value={attendance}
//             onChange={(e) => setAttendance(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>CA Marks: </label>
//           <input
//             type="number"
//             value={caMarks}
//             onChange={(e) => setCaMarks(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Midterm Marks: </label>
//           <input
//             type="number"
//             value={midtermMarks}
//             onChange={(e) => setMidtermMarks(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>End-Term Weightage Marks: </label>
//           <input
//             type="number"
//             value={endtermWeightage}
//             onChange={(e) => setEndtermWeightage(e.target.value)}
//           />
//         </div>
//         <br />
//         <button onClick={calculateExpectedMarks}>Calculate</button>
//       </div>
//       <h2>{expectedEndMarks}</h2>
//       <h2>{result}</h2>
//     </div>
//   );
// };

// export default ExpectedMarks;







import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ExpectedMarks.css";

const ExpectedMarks = () => {
  const [courseCode, setCourseCode] = useState("");
  const [attendance, setAttendance] = useState("");
  const [caMarks, setCaMarks] = useState("");
  const [midtermMarks, setMidtermMarks] = useState("");
  const [endtermWeightage, setEndtermWeightage] = useState("");
  const [expectedEndMarks, setExpectedEndMarks] = useState("");
  const [result, setResult] = useState("");
  const [criteriaStatus, setCriteriaStatus] = useState("");

  const navigate = useNavigate();

  const calculateExpectedMarks = () => {
    // Parse inputs
    const attendanceMarks = parseFloat(attendance) || 0;
    const caMarksVal = parseFloat(caMarks) || 0;
    const midtermMarksVal = parseFloat(midtermMarks) || 0;
    const endWeightage = parseFloat(endtermWeightage) || 0;

    const totalMarks = attendanceMarks + caMarksVal + midtermMarksVal;

    // Criteria: 30% of End-Term Weightage
    const requiredEndMarks = Math.ceil(0.3 * endWeightage);

    // Check criteria 1: End-term or midterm + end-term >= 30% of end-term weightage
    const isCriteria1Met =
      requiredEndMarks <= endWeightage ||
      midtermMarksVal + requiredEndMarks >= Math.ceil(0.3 * endWeightage);

    // Check criteria 2: Total >= 40 marks
    const isCriteria2Met = totalMarks + requiredEndMarks >= 40;

    // Update criteria status
    setCriteriaStatus(
      `Criteria 1 (End-Term >= 30% of weightage): ${
        isCriteria1Met ? "Pass" : "Fail"
      } | Criteria 2 (Total >= 40 marks): ${isCriteria2Met ? "Pass" : "Fail"}`
    );

    // Calculate expected marks for passing
    if (isCriteria1Met && isCriteria2Met) {
      setExpectedEndMarks(
        `You need at least ${requiredEndMarks} marks out of ${endWeightage} in the End-Term to pass.`
      );
      setResult("Expected to Pass.");
    } else {
      const requiredForTotal = Math.max(40 - totalMarks, 0);
      const marksNeeded = Math.max(requiredEndMarks, requiredForTotal);
      setExpectedEndMarks(
        `You need at least ${marksNeeded} marks out of ${endWeightage} in the End-Term to pass.`
      );
      setResult("Expected to Fail. Prepare for more in End-Term.");
    }
  };

  return (
    <div className="expected-container">
      <h1>Expected Marks Calculator</h1>
      <div className="form">
        <div>
          <label>Course Code: </label>
          <input
            type="text"
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
          />
        </div>
        <div>
          <label>Attendance Marks: </label>
          <input
            type="number"
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
          />
        </div>
        <div>
          <label>CA Marks: </label>
          <input
            type="number"
            value={caMarks}
            onChange={(e) => setCaMarks(e.target.value)}
          />
        </div>
        <div>
          <label>Midterm Marks: </label>
          <input
            type="number"
            value={midtermMarks}
            onChange={(e) => setMidtermMarks(e.target.value)}
          />
        </div>
        <div>
          <label>End-Term Weightage Marks: </label>
          <input
            type="number"
            value={endtermWeightage}
            onChange={(e) => setEndtermWeightage(e.target.value)}
          />
        </div>
        <br />
        <button onClick={calculateExpectedMarks}>Calculate</button>
      </div>
      <h2>{expectedEndMarks}</h2>
      <h2>{criteriaStatus}</h2>
      <h2>{result}</h2>
    </div>
  );
};

export default ExpectedMarks;

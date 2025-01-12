// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./TheoryObjective.css";
// const TheoryObjective = () => {
//   const [courseCode, setCourseCode] = useState("");
//   const [attendance, setAttendance] = useState("");
//   const [caMarks, setCaMarks] = useState("");
//   const [midtermMarks, setMidtermMarks] = useState("");
//   const [endtermMarks, setEndtermMarks] = useState("");
//   const [result, setResult] = useState("");

//   const navigate = useNavigate();

//   const calculateResult = () => {
//     const totalMarks =
//       (parseFloat(attendance) || 0) +
//       (parseFloat(caMarks) || 0) +
//       (parseFloat(midtermMarks) || 0) +
//       (parseFloat(endtermMarks) || 0);

//     const isCriteria1Met =
//       (parseFloat(endtermMarks) || 0) >= 30 ||
//       (parseFloat(midtermMarks) || 0) + (parseFloat(endtermMarks) || 0) >= 30;
//     const isCriteria2Met = totalMarks >= 40;

//     if (isCriteria1Met && isCriteria2Met) {
//       setResult(`Pass! Total Marks: ${totalMarks}`);
//     } else {
//       const missingMarks = !isCriteria2Met ? 40 - totalMarks : 0;
//       setResult(
//         `Fail! ${
//           missingMarks > 0
//             ? `You need ${missingMarks} more marks to meet the overall criteria.`
//             : ""
//         }`
//       );
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Theory Objective Subject</h1>
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
//         <label>Attendance: </label>
//         <input
//           type="number"
//           value={attendance}
//           onChange={(e) => setAttendance(e.target.value)}
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

// export default TheoryObjective;








import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TheoryObjective.css";

const TheoryObjective = () => {
  const [courseCode, setCourseCode] = useState("");
  const [attendance, setAttendance] = useState("");
  const [caMarks, setCaMarks] = useState("");
  const [midtermMarks, setMidtermMarks] = useState("");
  const [endtermMarks, setEndtermMarks] = useState("");
  const [result, setResult] = useState("");

  const navigate = useNavigate();

  const calculateResult = () => {
    const attendanceMarks = parseFloat(attendance) || 0;
    const caMarksVal = parseFloat(caMarks) || 0;
    const midtermMarksVal = parseFloat(midtermMarks) || 0;
    const endtermMarksVal = parseFloat(endtermMarks) || 0;

    const totalMarks = attendanceMarks + caMarksVal + midtermMarksVal + endtermMarksVal;

    // Criteria 1: Either End-Term Marks >= 15 or Midterm + Endterm >= 21
    const isCriteria1Met =
      endtermMarksVal >= 15 || midtermMarksVal + endtermMarksVal >= 21;

    // Criteria 2: Total Marks >= 40
    const isCriteria2Met = totalMarks >= 40;

    if (isCriteria1Met && isCriteria2Met) {
      setResult(`Pass! Total Marks: ${totalMarks}`);
    } else {
      const missingMarks = !isCriteria2Met ? 40 - totalMarks : 0;
      setResult(
        `Fail! ${missingMarks > 0 ? `You need ${missingMarks} more marks to meet the overall criteria.` : ""}`
      );
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Theory Objective Subject</h1>
      <button onClick={() => navigate("/passing-marks")}>Back</button>
      <br />
      <br />
      <div>
        <label>Course Code or Short Name: </label>
        <input
          type="text"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          placeholder="Enter Marks"

        />
      </div>
      <div>
        <label>Attendance (Max 5): </label>
        <input
          type="number"
          max="5"
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
          placeholder="Enter Marks"

        />
      </div>
      <div>
        <label>CA Marks (Max 25): </label>
        <input
          type="number"
          max="25"
          value={caMarks}
          onChange={(e) => setCaMarks(e.target.value)}
          placeholder="Enter Marks"

        />
      </div>
      <div>
        <label>Midterm Marks (Max 20): </label>
        <input
          type="number"
          max="20"
          value={midtermMarks}
          onChange={(e) => setMidtermMarks(e.target.value)}
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

export default TheoryObjective;

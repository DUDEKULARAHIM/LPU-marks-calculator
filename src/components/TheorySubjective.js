// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./TheorySubjective.css";
// const TheorySubjective = () => {
//   const [courseCode, setCourseCode] = useState("");
//   const [attendance, setAttendance] = useState("");
//   const [caMarks, setCaMarks] = useState("");
//   const [midtermMarks, setMidtermMarks] = useState("");
//   const [endtermSubjectiveMarks, setEndtermSubjectiveMarks] = useState("");
//   const [endtermObjectiveMarks, setEndtermObjectiveMarks] = useState("");
//   const [result, setResult] = useState("");

//   const navigate = useNavigate();

//   const calculateResult = () => {
//     const totalMarks =
//       (parseFloat(attendance) || 0) +
//       (parseFloat(caMarks) || 0) +
//       (parseFloat(midtermMarks) || 0) +
//       (parseFloat(endtermSubjectiveMarks) || 0) +
//       (parseFloat(endtermObjectiveMarks) || 0);

//     const endTermTotal =
//       (parseFloat(endtermSubjectiveMarks) || 0) +
//       (parseFloat(endtermObjectiveMarks) || 0);

//     const isCriteria1Met =
//       endTermTotal >= 30 || endTermTotal + (parseFloat(midtermMarks) || 0) >= 30;
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
//       <h1>Theory Subjective Subject</h1>
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
//         <label>End-Term Subjective Marks: </label>
//         <input
//           type="number"
//           value={endtermSubjectiveMarks}
//           onChange={(e) => setEndtermSubjectiveMarks(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>End-Term Objective Marks: </label>
//         <input
//           type="number"
//           value={endtermObjectiveMarks}
//           onChange={(e) => setEndtermObjectiveMarks(e.target.value)}
//         />
//       </div>
//       <br />
//       <button onClick={calculateResult}>Calculate</button>
//       <h2>{result}</h2>
//     </div>
//   );
// };

// export default TheorySubjective;





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TheorySubjective.css";

const TheorySubjective = () => {
  const [courseCode, setCourseCode] = useState("");
  const [attendance, setAttendance] = useState("");
  const [caMarks, setCaMarks] = useState("");
  const [midtermMarks, setMidtermMarks] = useState("");
  const [endtermSubjectiveMarks, setEndtermSubjectiveMarks] = useState("");
  const [endtermObjectiveMarks, setEndtermObjectiveMarks] = useState("");
  const [result, setResult] = useState("");

  const navigate = useNavigate();

  const calculateResult = () => {
    // Parse input values
    const attendanceMarks = parseFloat(attendance) || 0;
    const caMarksVal = parseFloat(caMarks) || 0;
    const midtermMarksVal = parseFloat(midtermMarks) || 0;
    const endtermSubjectiveMarksVal = parseFloat(endtermSubjectiveMarks) || 0;
    const endtermObjectiveMarksVal = parseFloat(endtermObjectiveMarks) || 0;

    // Calculate total marks
    const totalMarks =
      attendanceMarks +
      caMarksVal +
      midtermMarksVal +
      endtermSubjectiveMarksVal +
      endtermObjectiveMarksVal;

    // Calculate endterm total (subjective + objective)
    const endTermTotal = endtermSubjectiveMarksVal + endtermObjectiveMarksVal;

    // Criteria 1: Either (End-Term Subjective + Objective >= 30) or (Midterm + Endterm >= 30)
    const isCriteria1Met =
      endTermTotal >= 30 || midtermMarksVal + endTermTotal >= 30;

    // Criteria 2: Total marks should be >= 40
    const isCriteria2Met = totalMarks >= 40;

    // Check if both criteria are met
    if (isCriteria1Met && isCriteria2Met) {
      setResult(`Pass! Total Marks: ${totalMarks}`);
    } else {
      const missingMarks = !isCriteria2Met ? 40 - totalMarks : 0;
      setResult(
        `Fail! ${
          missingMarks > 0
            ? `You need ${missingMarks} more marks to meet the overall criteria.`
            : ""
        }`
      );
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Theory Subjective Subject</h1>
      <button onClick={() => navigate("/passing-marks")}>Back</button>
      <br />
      <br />
      <div>
        <label>Course Code or Short Name: </label>
        <input
          type="text"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
        />
      </div>
      <div>
        <label>Attendance (Max 5): </label>
        <input
          type="number"
          max="5"
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
        />
      </div>
      <div>
        <label>CA Marks (Max 25): </label>
        <input
          type="number"
          max="25"
          value={caMarks}
          onChange={(e) => setCaMarks(e.target.value)}
        />
      </div>
      <div>
        <label>Midterm Marks (Max 20): </label>
        <input
          type="number"
          max="20"
          value={midtermMarks}
          onChange={(e) => setMidtermMarks(e.target.value)}
        />
      </div>
      <div>
        <label>End-Term Subjective Marks (Max 35): </label>
        <input
          type="number"
          max="35"
          value={endtermSubjectiveMarks}
          onChange={(e) => setEndtermSubjectiveMarks(e.target.value)}
        />
      </div>
      <div>
        <label>End-Term Objective Marks (Max 15): </label>
        <input
          type="number"
          max="15"
          value={endtermObjectiveMarks}
          onChange={(e) => setEndtermObjectiveMarks(e.target.value)}
        />
      </div>
      <br />
      <button onClick={calculateResult}>Calculate</button>
      <h2>{result}</h2>
    </div>
  );
};

export default TheorySubjective;

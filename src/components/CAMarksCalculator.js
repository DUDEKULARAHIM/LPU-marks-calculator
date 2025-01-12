import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CAMarksCalculator.css";
const CAMarksCalculator = () => {
  const [ca1, setCa1] = useState("");
  const [ca2, setCa2] = useState("");
  const [ca3, setCa3] = useState("");
  const [weightage, setWeightage] = useState("");
  const [result, setResult] = useState("");

  const navigate = useNavigate();

  const calculateCAMarks = () => {
    const caMarks = [parseFloat(ca1) || 0, parseFloat(ca2) || 0, parseFloat(ca3) || 0];
    caMarks.sort((a, b) => b - a); // Sort to get the best two
    const bestTwoTotal = caMarks[0] + caMarks[1];
    const caWeightage = parseFloat(weightage) || 0;
    const calculatedMarks = ((bestTwoTotal / 60) * caWeightage).toFixed(2);

    setResult(`CA Marks: ${calculatedMarks}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>CA Marks Calculator</h1>
      <button onClick={() => navigate("/")} style={{backgroundColor:"green"}}>Back</button>
      <br />
      <br />
      <div>
        <label>Enter CA1 Marks: </label>
        <input
          type="number"
          value={ca1}
          onChange={(e) => setCa1(e.target.value)}
        />
      </div>
      <div>
        <label>Enter CA2 Marks: </label>
        <input
          type="number"
          value={ca2}
          onChange={(e) => setCa2(e.target.value)}
        />
      </div>
      <div>
        <label>Enter CA3 Marks: </label>
        <input
          type="number"
          value={ca3}
          onChange={(e) => setCa3(e.target.value)}
        />
      </div>
      <div>
        <label>Total Weightage Marks: </label>
        <input
          type="number"
          value={weightage}
          onChange={(e) => setWeightage(e.target.value)}
        />
      </div>
      <br />
      <button onClick={calculateCAMarks}>Calculate</button>
      <h2>{result}</h2>
    </div>
  );
};

export default CAMarksCalculator;

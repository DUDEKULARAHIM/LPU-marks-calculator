import React from "react";
import { useNavigate } from "react-router-dom";
// import PracticalSubject from "./PracticalSubject";
// import TheoryObjective from "./TheoryObjective";
// import TheorySubjective from "./TheorySubjective";
import "./PassingMarks.css";
const PassingMarks = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Passing Marks</h1>
      <button onClick={() => navigate("/")}>Back</button>
      <br />
      <br />
      <button onClick={() => navigate("/practical-subject")}>
        Practical Subject
      </button>
      <br />
      <br />
      <button onClick={() => navigate("/theory-objective")}>
        Theory Objective
      </button>
      <br />
      <br />
      <button onClick={() => navigate("/theory-subjective")}>
        Theory Subjective
      </button>
    </div>
  );
};

export default PassingMarks;

import React from "react";
import GoalComp from "../components/GoalComp";
import '../components/goalCss.css'
const GoalPage = () => {
  return (
    <div className="background_container"
      style={{
        backgroundImage: "url(/static/media/bmwsupra92_a_computer_placed_on_a_desk.85ab27dba9f98b5ffba1.png)",
      }}
    >
      <GoalComp />
    </div>
  );
};

export default GoalPage;

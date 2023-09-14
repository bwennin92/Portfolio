import React from "react";
import GoalComp from "../components/GoalComp";
import '../components/goalCss.css'
import background from "../Pictures/bmwsupra92_a_computer_placed_on_a_desk.png"
const GoalPage = () => {
  return (
    <div className="background_container"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <GoalComp />
    </div>
  );
};

export default GoalPage;

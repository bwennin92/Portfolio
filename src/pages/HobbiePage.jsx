import React from "react";
import HobbieComp from "../components/HobbieComp";
const HobbiePage = () => {
  return (
    <div className="bg-black text-green-700 min-h-screen">
      <HobbieComp>
        <h1>Hobbies</h1>
      
        <ul>
          <li>Playing Video Games
          <img src="https://bit.ly/halo2chief" alt="Halo2" />
          <img src="..https://bit.ly/dragonsWoW" alt="World of Warcraft" />
          <img src="https://bit.ly/ffxivpally" alt="Final Fantasy" />
          </li>
          <li>Learning new code languages</li>
          <li>Hiking</li>
          <li>Going to the beach</li>
        </ul>
      </HobbieComp>
    </div>
  );
};

export default HobbiePage;

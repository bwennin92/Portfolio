import React from "react";
import HobbieComp from "../components/HobbieComp";
const HobbiePage = () => {
  return (
    <div className="bg-black text-green-700 min-h-screen">
      <HobbieComp>
        <h1>Hobbies</h1>
      
        <ul>
          <li>Playing Video Games
          <img src="../images/Halo2.jpg" alt="Halo2" />
          <img src="../images/10.0_Dragonflight_BrowsingCard_960x540.webp" alt="World of Warcraft" />
          <img src="../images/capsule_616x353.jpg" alt="Final Fantasy" />
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

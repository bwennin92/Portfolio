import React from "react";
import HikingImages from "../components/HikingImages";
import HobbieComp from "../components/HobbieComp";
import Images from "../components/Images";
import LogoImg from "../components/LogoImg";
const HobbiePage = () => {
  return (
    <div className="bg-black text-green-700 min-h-screen">
      <HobbieComp>
        <h1>Hobbies</h1>
        <ul>
          <li>Playing Video Games
          <Images/>
          </li>
          <li>Learning new code languages and frameworks</li>
          <LogoImg/>
          <li>Hiking</li>
          <HikingImages/>
          <li>Going to the beach</li>
        </ul>
      </HobbieComp>
    </div>
  );
};

export default HobbiePage;


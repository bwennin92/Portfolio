import React from "react";
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
          <img src="https://bit.ly/3WjwWob" alt="AztecFalls" />
          <img src="https://bit.ly/3WlL3cr" alt="ChantryFlats" />
          <img src="https://bit.ly/3HT1nND" alt="Heart Rock Falls" />
          <li>Going to the beach</li>
        </ul>
      </HobbieComp>
    </div>
  );
};

export default HobbiePage;


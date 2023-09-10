import React from "react";
import HikingImages from "../components/HikingImages";
import LogoImg from "../components/LogoImg";
import Marquee from "react-fast-marquee";
import Images from "../components/Images";
const HobbiePage = () => {
  return (
    <div className="bg-black text-green-700 min-h-screen">
      <h1>Hobbies</h1>
      Playing Video Games
      <Marquee >
        <Images />
      </Marquee>
      Learning new code languages, frameworks, and Version Controls
        <LogoImg />

      Hiking
      <Marquee>
        <HikingImages />
      </Marquee>
    </div>
  );
};

export default HobbiePage;

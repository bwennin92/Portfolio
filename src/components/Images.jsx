import React from "react";

const Images = () => {
  return (
    <div className="flex flex-gap h-[250px]">
      <img src={require("../Pictures/Halo_2_art.0.webp")} alt="Halo2" />
      <img
        src={require("../Pictures/WoWDragon.webp")}
        alt="World Of Warcraft"
      />
      <img
        src={require("../Pictures/ffxiv-endwalker-editions_3.webp")}
        alt="Final Fantasy"
      />
      <img src={require("../Pictures/Destiny 2.jpg")} alt="Destiny 2" />
    </div>
  );
};
export default Images;

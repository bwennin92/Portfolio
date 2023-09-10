import React from 'react'

const HikingImages = () => {
  return (
    
    <div className="flex flex-gap h-[250px]">
      <img src= {require("../Pictures/Aztecfalls.webp")} alt="Aztecfalls" />
      <img src={require("../Pictures/Chantryflats.webp")} alt="Chantry Flats" />
      <img src={require("../Pictures/heart-rock-falls-2017-14.webp")} alt="Heart Rock Falls" />
    </div>

  )
}

export default HikingImages
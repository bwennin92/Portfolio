import React from 'react'

const HikingImages = () => {
  return (
    <div>
    <ul className='flex flex-gap flex-col w-1/5 '>
    <img src= {require("../Pictures/Aztecfalls.webp")} alt="Aztecfalls" />
    <img src={require("../Pictures/Chantryflats.webp")} alt="Chantry Flats" />
    <img src={require("../Pictures/heart-rock-falls-2017-14.webp")} alt="Heart Rock Falls" />
    </ul>
    </div>
  )
}

export default HikingImages
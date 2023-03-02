import React from 'react'

const Images = () => {
  return (
    <div>
        <ul className='flex flex-gap flex-auto w-1/3'>
        <img src= {require("../Pictures/Halo_2_art.0.webp")} alt="Halo2" />
        <img src={require("../Pictures/WoWDragon.webp")} alt="World Of Warcraft" />
        <img src={require("../Pictures/ffxiv-endwalker-editions_3.webp")} alt="Final Fantasy" />
        </ul>
        </div>
    
  )
}

export default Images












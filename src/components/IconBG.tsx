import React, { useState } from 'react'
import useScreenSize from "../hooks/useScreenSize"
import globe from "../../images/globe.svg"
import computer from "../../images/computer.svg"
// https://codepen.io/sosuke/pen/Pjoqqp
// invert(56%) sepia(41%) saturate(3762%) hue-rotate(83deg) brightness(118%) contrast(121%)

const images = [
  globe,
  computer
]

const IconBG = () => {
  const { width, height } = useScreenSize()
  console.log(width, height, 'screen size')
  const [ color, setColor ] = useState('invert(8%) sepia(6%) saturate(2904%) hue-rotate(187deg) brightness(96%) contrast(85%)')
  const [ colorIndex, setColorIndex] = useState(-1)

  const renderBackgroundIcons = () => {
    const iconWidth = 60
    const areaBackground = width * height
    const screenWidthIcons = width / iconWidth
    const areaIcon = iconWidth * iconWidth
    const numberOfLoops = areaBackground/areaIcon
    const bgImages = []

    for ( let i = 0; i < numberOfLoops; i++) {
      for ( let j = 0; j < images.length; j++) {
        const image = images[j]
        bgImages.push (
          <img
            key={ `${ i }${ j }` }
            src={ image.src }
            className="absolute w-14 transition-all ease-in-out delay-100 duration-300"
            onMouseEnter={() => { setColor('invert(56%) sepia(41%) saturate(3762%) hue-rotate(83deg) brightness(118%) contrast(121%)'); setColorIndex(i) }}
            onMouseLeave={() => {setColor('invert(100%) sepia(0%) saturate(7485%) hue-rotate(17deg) brightness(114%) contrast(101%)'); setColorIndex(-1) }}
            style={{
              left: `${ i * 60 }px` ,
              filter: colorIndex === i ? color : 'invert(8%) sepia(6%) saturate(2904%) hue-rotate(187deg) brightness(96%) contrast(85%)',
            }}
            alt="icon"
          />
        )
      }
    }
    console.log(bgImages, 'bg images')
    return (
      bgImages.map( image => image )
    )
  }

  return (
    <div className="flex flex-col relative w-full">
      { renderBackgroundIcons() }
    </div>
  );
};

export default IconBG

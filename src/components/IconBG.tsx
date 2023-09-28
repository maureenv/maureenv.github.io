import React, { useState } from 'react';
import globe from "../../images/globe.svg";
// https://codepen.io/sosuke/pen/Pjoqqp
// invert(56%) sepia(41%) saturate(3762%) hue-rotate(83deg) brightness(118%) contrast(121%)

const IconBG = () => {
  const [ color, setColor ] = useState('invert(8%) sepia(6%) saturate(2904%) hue-rotate(187deg) brightness(96%) contrast(85%)')
  const [ colorIndex, setColorIndex] = useState(-1)

  return (
    <div className="flex relative w-full">
      { Array.from({ length: 30 }, ((_, i) => {
        return (
          <img
            src={ globe.src }
            className="absolute w-14 transition-all ease-in-out delay-100 duration-300"
            onMouseEnter={() => { setColor('invert(56%) sepia(41%) saturate(3762%) hue-rotate(83deg) brightness(118%) contrast(121%)'); setColorIndex(i) }}
            onMouseLeave={() => {setColor('invert(100%) sepia(0%) saturate(7485%) hue-rotate(17deg) brightness(114%) contrast(101%)'); setColorIndex(-1) }}
            style={{
              left: `${ i * 60 }px` ,
              filter: colorIndex === i ? color : 'invert(8%) sepia(6%) saturate(2904%) hue-rotate(187deg) brightness(96%) contrast(85%)',
            }}
            alt="phone"
            />
        )
      }))}
    </div>
  );
};

export default IconBG

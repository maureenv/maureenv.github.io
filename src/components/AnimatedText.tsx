import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const AnimatedText = () => {
  return (
    <>
      <ReactTypingEffect
        text={["code in JavaScript", "use React", "design in Figma & Sketch", "code in TypeScript", "use Photoshop", "conduct user interviews", "write CSS", "integrate APIs", "use Illustrator", "make responsive designs"]}
        speed={ 50 }
        eraseSpeed={ 100 }
        eraseDelay={ 1000 }
        typingDelay={ 1000 }
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1 className="font-black bg-gradient-to-r from-green-600 to-cyan-600 text-transparent bg-clip-text">
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
    </>
  );
};

export default AnimatedText
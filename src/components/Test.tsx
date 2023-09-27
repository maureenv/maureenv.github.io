import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Test = () => {
  return (
    <>
      <ReactTypingEffect
        text={["code JavaScript", "design in Figma", "use Photoshop", "conduct user interviews"]}
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

export default Test
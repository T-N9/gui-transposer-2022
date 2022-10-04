import React, { useState, useEffect } from "react";

import MyChord from "../data/Chord";

import FSharp_Chords from "../chordDB/src/db/guitar/chords/F#";

const ChordDb = () => {

  let FSharp_major = FSharp_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

  let FSharp_minor = FSharp_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

  // console.log({C})

  console.log({FSharp_major, FSharp_minor})

  return (
    <div>
      <div className="container my-4">
        <div className="my-8">
          <div className="flex gap-4 justify-center">
            {FSharp_major[0].positions.map((position, index) => {
              return <MyChord key={index} id={index} position={position} />;
            })}
          </div>
        </div>

        <div className="my-8">
          <div className="flex gap-4 justify-center">
            {FSharp_minor[0].positions.map((position, index) => {
              return <MyChord key={index} id={index} position={position} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChordDb;

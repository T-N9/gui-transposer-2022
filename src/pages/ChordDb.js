import React, { useState, useEffect } from "react";

import MyChord from "../data/Chord";

import G_Chords from "../chordDB/src/db/guitar/chords/G";

const ChordDb = () => {

  let G_major = G_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

  let G_minor = G_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

  // console.log({C})

  console.log({G_major, G_minor})

  return (
    <div>
      <div className="container my-4">
        <div className="my-8">
          <div className="flex gap-4 justify-center">
            {G_major[0].positions.map((position, index) => {
              return <MyChord key={index} id={index} position={position} />;
            })}
          </div>
        </div>

        <div className="my-8">
          <div className="flex gap-4 justify-center">
            {G_minor[0].positions.map((position, index) => {
              return <MyChord key={index} id={index} position={position} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChordDb;

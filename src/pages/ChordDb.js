import React, { useState, useEffect } from "react";

import MyChord from "../data/Chord";

import C_Chords from "../chordDB/src/db/guitar/chords/C";

const ChordDb = () => {
  const [CmajorPositions, setCmajorPositions] = useState([]);

  let C_major = C_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

  useEffect(() => {
    setCmajorPositions(C_major[0].positions);
  }, [C_major]);

  return (
    <div>
      <h1>Chords are here.</h1>

      <div className="flex gap-4">
        {CmajorPositions.map((position, index) => {
          return <MyChord key={index} id={index} position={position} />;
        })}
      </div>
    </div>
  );
};

export default ChordDb;

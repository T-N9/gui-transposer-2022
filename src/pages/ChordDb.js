import React, { useState, useEffect } from "react";

import MyChord from "../data/Chord";

import C_Chords from "../chordDB/src/db/guitar/chords/C";
import D_Chords from "../chordDB/src/db/guitar/chords/D";
import F_Chords from "../chordDB/src/db/guitar/chords/F";
import A_Chords from "../chordDB/src/db/guitar/chords/A";

const ChordDb = () => {
  const [CmajorPositions, setCmajorPositions] = useState([]);
  const [DmajorPositions, setDmajorPositions] = useState([]);
  const [FmajorPositions, setFmajorPositions] = useState([]);
  const [AmajorPositions, setAmajorPositions] = useState([]);

  let C_major = C_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

  let D_major = D_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

  let F_major = F_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

  let A_major = A_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

  console.log({ A_major, C_major, F_major, D_major });

  useEffect(() => {
    setCmajorPositions(C_major[0].positions);
  }, [C_major]);

  useEffect(() => {
    setDmajorPositions(D_major[0].positions);
  }, [D_major]);

  useEffect(() => {
    setFmajorPositions(F_major[0].positions);
  }, [F_major]);

  useEffect(() => {
    setAmajorPositions(A_major[0].positions);
  }, [A_Chords]);

  return (
    <div>
      <div className="container my-4">
        <div className="my-8">
          <h1 className="font-bold text-center">C Major chords</h1>
          <div className="flex gap-4 justify-center">
            {CmajorPositions.map((position, index) => {
              return <MyChord key={index} id={index} position={position} />;
            })}
          </div>
        </div>
        <div className="my-8">
          <h1 className="font-bold text-center">D Major chords</h1>
          <div className="flex gap-4 justify-center">
            {DmajorPositions.map((position, index) => {
              return <MyChord key={index} id={index} position={position} />;
            })}
          </div>
        </div>

        <div className="my-8">
          <h1 className="font-bold text-center">F Major chords</h1>
          <div className="flex gap-4 justify-center">
            {FmajorPositions.map((position, index) => {
              return <MyChord key={index} id={index} position={position} />;
            })}
          </div>
        </div>

        <div className="my-8">
          <h1 className="font-bold text-center">A Major chords</h1>
          <div className="flex gap-4 justify-center flex-wrap">
            {/* {
              A_Chords.map((suffix) => {
                return (
                  suffix.positions.map((position, index) => {
                    return <MyChord key={index} id={index} position={position} />;
                  })
                )

              })
            } */}
            {AmajorPositions.map((position, index) => {
              return <MyChord key={index} id={index} position={position} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChordDb;

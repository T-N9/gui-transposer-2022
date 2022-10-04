import React, { useState, useEffect } from "react";

import MyChord from "../data/Chord";

import A_Chords from "../chordDB/src/db/guitar/chords/A";
import Ab_Chords from "../chordDB/src/db/guitar/chords/Ab";
import B_Chords from "../chordDB/src/db/guitar/chords/B";
import Bb_Chords from "../chordDB/src/db/guitar/chords/Bb";
import C_Chords from "../chordDB/src/db/guitar/chords/C";
import CSharp_Chords from "../chordDB/src/db/guitar/chords/C#";
import D_Chords from "../chordDB/src/db/guitar/chords/D";
import E_Chords from "../chordDB/src/db/guitar/chords/E";
import Eb_Chords from "../chordDB/src/db/guitar/chords/Eb";
import F_Chords from "../chordDB/src/db/guitar/chords/F";
import FSharp_Chords from "../chordDB/src/db/guitar/chords/F#";
import G_Chords from "../chordDB/src/db/guitar/chords/G";

const ChordDb = () => {
  let A_major = A_Chords.filter((chord) => {
    return chord.suffix === "7";
  });

  let Ab_major = Ab_Chords.filter((chord) => {
    return chord.suffix === "7";
  });

  let B_major = B_Chords.filter((chord) => {
    return chord.suffix === "7";
  });

  let Bb_major = Bb_Chords.filter((chord) => {
    return chord.suffix === "7";
  });

  let C_major = C_Chords.filter((chord) => {
    return chord.suffix === "7";
  });

  let CSharp_major = CSharp_Chords.filter((chord) => {
    return chord.suffix === "7";
  });

  let D_major = D_Chords.filter((chord) => {
    return chord.suffix === "7";
  });

  let E_major = E_Chords.filter((chord) => {
    return chord.suffix === "7";
  });

  let Eb_major = Eb_Chords.filter((chord) => {
    return chord.suffix === "7";
  });

  let FSharp_major = FSharp_Chords.filter((chord) => {
    return chord.suffix === "7";
  });

  let F_major = F_Chords.filter((chord) => {
    return chord.suffix === "7";
  });

  let G_major = G_Chords.filter((chord) => {
    return chord.suffix === "7";
  });

  console.log({
    A_major,
    Ab_major,
    B_major,
    Bb_major,
    C_major,
    CSharp_major,
    D_major,
    E_major,
    Eb_major,
    F_major,
    FSharp_major,
    G_major,
  });

  return (
    <div>
      <div className="container my-4">
        <div className="my-8">
          <div className="flex gap-4 justify-center">
            {A_major[0].positions.map((position, index) => {
              return <MyChord key={index} id={index} position={position} />;
            })}
          </div>
        </div>

        <div className="my-8">
          <div className="flex gap-4 justify-center">
            {Ab_major[0].positions.map((position, index) => {
              return <MyChord key={index} id={index} position={position} />;
            })}
          </div>
        </div>

        <div className="my-8">
          <div className="flex gap-4 justify-center">
            {B_major[0].positions.map((position, index) => {
              return <MyChord key={index} id={index} position={position} />;
            })}
          </div>
        </div>

        <div className="my-8">
          <div className="flex gap-4 justify-center">
            {Bb_major[0].positions.map((position, index) => {
              return <MyChord key={index} id={index} position={position} />;
            })}
          </div>
        </div>

        <div className="my-8">
          <div className="flex gap-4 justify-center">
            {C_major[0].positions.map((position, index) => {
              return <MyChord key={index} id={index} position={position} />;
            })}
          </div>
        </div>

        <div className="my-8">
          <div className="flex gap-4 justify-center">
            {CSharp_major[0].positions.map((position, index) => {
              return <MyChord key={index} id={index} position={position} />;
            })}
          </div>
        </div>

        <div className="my-8">
          <div className="flex gap-4 justify-center">
            {D_major[0].positions.map((position, index) => {
              return <MyChord key={index} id={index} position={position} />;
            })}
          </div>
        </div>

        <div className="my-8">
          <div className="flex gap-4 justify-center">
            {E_major[0].positions.map((position, index) => {
              return <MyChord key={index} id={index} position={position} />;
            })}
          </div>
        </div>

        <div className="my-8">
          <div className="flex gap-4 justify-center">
            {Eb_major[0].positions.map((position, index) => {
              return <MyChord key={index} id={index} position={position} />;
            })}
          </div>
        </div>

        <div className="my-8">
          <div className="flex gap-4 justify-center">
            {F_major[0].positions.map((position, index) => {
              return <MyChord key={index} id={index} position={position} />;
            })}
          </div>
        </div>

        <div className="my-8">
          <div className="flex gap-4 justify-center">
            {FSharp_major[0].positions.map((position, index) => {
              return <MyChord key={index} id={index} position={position} />;
            })}
          </div>
        </div>

        <div className="my-8">
          <div className="flex gap-4 justify-center">
            {G_major[0].positions.map((position, index) => {
              return <MyChord key={index} id={index} position={position} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChordDb;

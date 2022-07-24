import React, { useState, useEffect } from "react";
import "./App.css";
import { uniq } from "lodash";
import parse from 'html-react-parser'

import { ChordRegexOp, chords_Arr_i, chords_Arr_ii, chords_Arr_i_regex, chords_Arr_ii_regex , chords_Arr_Regex } from "./constants";

const App = () => {

  const [lyricBoard, setLyricBoard] = useState("");
  const [detectedChords, setDetectedChords] = useState([]);
  const [transposedChords, setTransposedChords] = useState([]);
  const [transposeLvl, setTransposeLvl] = useState(0);
  const [matchesPos, setMatchesPos] = useState([]);

  // Alternative syntax using ChordRegExp constructor
  // const ChordRegex = new ChordRegExp('[A]m |[B]m |[E]m | [A]m | [B]m | [E]m | [A]m| [B]m| [E]m|^[A]m|^[B]m|^[E]m', 'gm')

  useEffect(() => {
    let matches;
    let detectedChordsArr = [];
    let matchesPosArr = [];
    while ((matches = ChordRegexOp.exec(lyricBoard)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (matches.index === ChordRegexOp.lastIndex) {
        ChordRegexOp.lastIndex++;
      }

      // The result can be accessed through the `m`-variable.
      matches.forEach((match, groupIndex) => {
        detectedChordsArr.push(match.trim());
        // console.log({
        //   matchChord: match,
        //   startPos: matches.index,
        //   endPos: ChordRegexOp.lastIndex,
        // });
        matchesPosArr.push({
          matchChord: match,
          startPos: matches.index,
          endPos: ChordRegexOp.lastIndex,
        });
        // console.log(`Found match, group ${groupIndex}: ${match}`);
      });
    }
    setMatchesPos(matchesPosArr);
    setDetectedChords(uniq(detectedChordsArr));
  }, [lyricBoard]);

  console.log({ matchesPos, detectedChords ,transposedChords });

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log({ detectedChords });
  };

  const handleDownStrictLvl = (chordIndex, actionLvl) => {
    // console.log(`${chordIndex} + ${actionLvl}`);

    if (chordIndex + actionLvl >= 0) {
      return chordIndex + actionLvl;
    } else {
      return 12 + (chordIndex + actionLvl);
    }
  };

  const handleUpStrictLvl = (chordIndex, actionLvl) => {
    // console.log({ chordIndex, actionLvl });
    if (chordIndex + actionLvl <= 11) {
      return chordIndex + actionLvl;
    } else {
      return -(12 - (chordIndex + actionLvl));
    }
  };

  useEffect(() => {
    let transposedChordArr = [];
    if (transposeLvl <= -1) {
      detectedChords.map((chord) => {
        if (
          12 + (chords_Arr_i.indexOf(chord) + transposeLvl) ===
          chords_Arr_i.indexOf(chord)
        ) {
          setTransposeLvl(-1);
        }
        if (chords_Arr_i.indexOf(chord) !== -1) {
          let indexDown = handleDownStrictLvl(
            chords_Arr_i.indexOf(chord),
            transposeLvl
          );

          transposedChordArr.push(chords_Arr_i[indexDown]);
          // console.log(
          //   `${chord} is down ${chords_Arr_i.indexOf(
          //     chord
          //   )} + ${transposeLvl} ,${indexDown},  ${chords_Arr_i[indexDown]} `
          // );
        }

        if (chords_Arr_ii.indexOf(chord) !== -1) {
          let indexDown = handleDownStrictLvl(
            chords_Arr_ii.indexOf(chord),
            transposeLvl
          );
          transposedChordArr.push(chords_Arr_ii[indexDown]);
          // console.log(
          //   `${chord} is down ${chords_Arr_ii.indexOf(
          //     chord
          //   )} + ${transposeLvl} ,${indexDown},  ${chords_Arr_ii[indexDown]} `
          // );
        }
      });
    } else {
      detectedChords.map((chord) => {
        if (
          -(12 - (chords_Arr_i.indexOf(chord) + transposeLvl)) ===
          chords_Arr_i.indexOf(chord)
        ) {
          setTransposeLvl(1);
        }
        if (chords_Arr_i.indexOf(chord) !== -1) {
          let indexUp = handleUpStrictLvl(
            chords_Arr_i.indexOf(chord),
            transposeLvl
          );
          transposedChordArr.push(chords_Arr_i[indexUp]);
          // console.log(
          //   `${chord} is up ${chords_Arr_i.indexOf(
          //     chord
          //   )} + ${transposeLvl} ,${indexUp},  ${chords_Arr_i[indexUp]} `
          // );
        }

        if (chords_Arr_ii.indexOf(chord) !== -1) {
          let indexUp = handleUpStrictLvl(
            chords_Arr_ii.indexOf(chord),
            transposeLvl
          );
          transposedChordArr.push(chords_Arr_ii[indexUp]);
          // console.log(
          //   `${chord} is up ${chords_Arr_ii.indexOf(
          //     chord
          //   )} + ${transposeLvl} ,${indexUp},  ${chords_Arr_ii[indexUp]} `
          // );
        }
      });
    }
    setTransposedChords(transposedChordArr);


    // detectedChords.map((chord, index) => {
    //   // let currentChord= chords_Arr_Regex.filter((item) => {
    //   //   return chord === item.chord;
    //   // })




    //   console.log({currentChord})
    //   currentChord.length > 0 && setLyricBoard(lyricBoard.replace(currentChord[0].regex , transposedChordArr[index]))
    // });

  }, [transposeLvl]);

  let tempLyricBoard = lyricBoard;
  useEffect(() => {
    
    transposeLvl !== 0 && matchesPos.map((item) => {
      detectedChords.map((chord, index)=> {
        if (item.matchChord.trim() === chord) {
          let replacedChord = item.matchChord.replace(item.matchChord.trim(), transposedChords[index]);
          console.log(replacedChord)
          tempLyricBoard = lyricBoard.replace(item.matchChord , replacedChord)
          return replacedChord;
        }
      });

    });
    setLyricBoard(tempLyricBoard)
  }, [transposeLvl, transposedChords])


  const handleTransposeUp = () => {
    setTransposeLvl((prev) => prev + 1);
  };

  const handleTransposeDown = () => {
    setTransposeLvl((prev) => prev - 1);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          className="lyric-input"
          value={lyricBoard}
          onChange={(e) => {
            setLyricBoard(e.target.value);
          }}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>

        <button className="lyric-genBtn">Generate</button>
      </form>

      <section className="transposer">
        {transposedChords.length > 0 && transposeLvl !== 0 ? (
          <div className="transposed-chords">
            {transposedChords.length > 0 &&
              transposedChords.map((chord) => {
                return <p key={chord}>{chord}</p>;
              })}
          </div>
        ) : (
          <div className="detected-chords">
            {detectedChords.length > 0 &&
              detectedChords.map((chord) => {
                return <p key={chord}>{chord}</p>;
              })}
          </div>
        )}

        <div className="transpose-btn">
          <button onClick={handleTransposeDown}>-</button>
          <button onClick={() => setTransposeLvl(0)}>Reset</button>
          <button onClick={handleTransposeUp}>+</button>
        </div>
        <h1>{transposeLvl}</h1>
      </section>

      {/* <pre className="lyric-board">{parse(lyricBoard.replace(/Em/g, `<span class='chord'>Em</span>`))}</pre> */}
      <pre className="lyric-board">{parse(lyricBoard)}</pre>
    </>
  );
};

export default App;

// useEffect(() => {
//     let tempLyric = "";
//     detectedChords.map((chord)=> {
//       let tempChord = chords_Arr_Regex.filter((item) => {
//         return item.chord === chord
//       })

//       tempChord.map((item) => {
//         tempLyric = inputLyric.replace(item.regex, `<span class="chord">${chord}</span>`)
//         setLyricBoard(tempLyric)
//       });
//     });
//   }, [transposeLvl])
import React from 'react';

/* Components */
import LyricLine from '../../components/common/lyric-line/LyricLine';

/* Hook */
import Hook from './hook.main';

const Main = () => {

    const {
        inputLyric,
        transposedChords,
        transposeLvl,
        detectedChords,
        lyricBoard,
        /* actions */
        setInputLyric,
        handleSubmit,
        setTransposeLvl,
        handleTransposeDown,
        handleTransposeUp
    } = Hook();

    return (
        <>
        <form onSubmit={handleSubmit}>
          <textarea
            className="lyric-input"
            value={inputLyric}
            onChange={(e) => {
              setInputLyric(e.target.value);
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
  
        <pre className="lyric-board">
          {lyricBoard.length > 0 &&
            lyricBoard.map((line, index) => {
              return (
                <LyricLine
                  key={index}
                  line={line}
                  lyricBoard={lyricBoard}
                  transposeLvl={transposeLvl}
                  detectedChords={detectedChords}
                  transposedChords={transposedChords}
                />
              );
            })}
        </pre>
      </>
    );
}

export default Main;

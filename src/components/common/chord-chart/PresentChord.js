import React from "react";
import { useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";

/* components */
import ChordChart from "./ChordChart";
import SwiperFree from "../swiper/SwiperFree";

/* Hook */
import Hook from "./hook.defineChord";

/* Util */
import { changeChordType } from "../../../util/changeChordType";

const PresentChord = ({ isFlat}) => {
  const { chordToShow, chordPositions, presentChords } = useSelector(
    (state) => state.chordChart
  );

  const { closePresentChords } = Hook();

  return (
    <div
      className={`h-screen fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-all ${
        presentChords ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        onClick={closePresentChords}
        className=" absolute top-0 bottom-0 left-0 right-0 bg-dark bg-opacity-75 z-30 flex justify-center  items-center"
      ></div>
      <div className="presentChord flex gap-3 relative z-50 w-[70%] lg:w-[40%]">
        {presentChords && (
          <SwiperFree>
            {chordPositions.length !== 0 &&
              chordPositions.map((position, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="bg-white px-3 py-5 rounded-md select-none">
                      <h1 className="text-center text-xl font-bold text-light-md">{changeChordType(chordToShow, isFlat)} - {index +1}</h1>
                      <ChordChart position={position} id={index} />
                    </div>
                  </SwiperSlide>
                );
              })}
          </SwiperFree>
        )}
      </div>
    </div>
  );
};

export default PresentChord;

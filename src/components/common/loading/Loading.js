import React from "react";

/* Icons */
import { LoadingAni } from "../../../assets";

/* Hook */
import Hook from "./hook.loading";

const Loading = () => {
  const { loading } = Hook();

  return (
    <div
      className={`min-h-screen fixed top-0 left-0 right-0 bottom-0 z-[5000] bg-dark transition-all flex justify-center items-center ${
        loading ? "bg-opacity-60 visible" : "bg-opacity-0 invisible"
      }`}
    >
      <img className="w-10" src={LoadingAni} alt="loading" />
    </div>
  );
};

export default Loading;

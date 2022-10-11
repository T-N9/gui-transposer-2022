import React from "react";

/* Hook */
import Hook from "./hook.alertBox";

const AlertBox = ({
  confirmAction
}) => {
  const { message, alert, closeAlertBox } = Hook();

  return (
    <>
      <div
        className={`fixed font-secondary top-0 left-0 bottom-0 right-0 bg-opacity-70 z-[1000] flex justify-center items-center transition-all ${
          alert ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          onClick={closeAlertBox}
          className="absolute top-0 left-0 bottom-0 right-0 bg-gray-700 bg-opacity-70"
        ></div>

        <div className="relative z-[2000] bg-white px-5 py-8 w-[90%] lg:w-[25%] rounded">
          <p className="text-center">{message}</p>

          <div className="flex justify-center items-center gap-4 mt-4">
            <button className="px-6 py-2 rounded bg-danger text-white text-sm shadow" onClick={closeAlertBox}>
              Cancel
            </button>

            <button onClick={confirmAction} className="px-6 py-2 rounded bg-info text-white text-sm shadow">
              Confirm
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default AlertBox;

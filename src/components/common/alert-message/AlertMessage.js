import React from "react";

import Hook from "./hook.alertMessage";

import { CheckCircledIcon } from "@radix-ui/react-icons";

const AlertMessage = () => {
  const { alert, message, status } = Hook();

  return (
    <div
      className={`fixed top-20 left-1/2 bg-${status} transform transition-all -translate-x-1/2 rounded-lg shadow ${
        alert
          ? "visible opacity-100 translate-y-0"
          : "invisible opacity-0 -translate-y-10"
      }`}
    >
      <div className="py-2 px-5 flex gap-3 justify-between items-center text-white ">
        <h1 className="font-secondary">{message}</h1>

        <CheckCircledIcon/>
      </div>
    </div>
  );
};

export default AlertMessage;

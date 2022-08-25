import React from "react";

import Hook from "./hook.alertMessage";

const AlertMessage = () => {
  const { alert, message, status } = Hook();

  return (
    <div className={`fixed bottom-20 left-1/2 bg-${status} transform transition-all -translate-x-1/2 rounded-lg shadow ${alert ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-10'}`}>
      <div className="py-2 px-5">
        <h1>Helo {message}</h1>
      </div>
    </div>
  );
};

export default AlertMessage;

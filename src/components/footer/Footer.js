import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark py-5">
      <p className="text-center text-white">
        Designed and Built by{" "}
        <a
          href="https://www.tenyain.com/"
          target="_blank"
          referrerPolicy="noreferrer"
        >
          <span className="font-secondary font-bold text-light-md">
            TeNyain
          </span>
        </a>
      </p>
      <p className="text-center text-white font-secondary">
      © 2022 Gui-Transpo | All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

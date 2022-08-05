import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import * as Scroll from "react-scroll";

const Hook = (printRef) => {
  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/png");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.png";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };
  const speedOfScroll = [
    { id: 1, name: "100", speed: 50000 },
    { id: 2, name: "200", speed: 60000 },
    { id: 3, name: "300", speed: 70000 },
    { id: 4, name: "400", speed: 80000 },
    { id: 5, name: "500", speed: 90000 },
    { id: 6, name: "600", speed: 100000 },
    { id: 7, name: "700", speed: 110000 },
    { id: 8, name: "800", speed: 500000 },
  ];
  const [selected, setSelected] = useState(speedOfScroll[0].name);
  const [scrollSpeed, setScrollSpeed] = useState(50000);

  let ScrollLink = Scroll.Link;

  useEffect(() => {
    let selectedSpeed = speedOfScroll.filter((speed) => {
      return speed.name === selected;
    });

    setScrollSpeed(selectedSpeed[0].speed);
  }, [selected, speedOfScroll]);

  return {
    selected,
    speedOfScroll,
    scrollSpeed,
    ScrollLink,
    /* actions */
    setSelected,
    setScrollSpeed,
    handleDownloadImage,
  };
};

export default Hook;

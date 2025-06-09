import React from "react";
import arduinoSvg from "../assets/arduino-svgrepo-com.svg";
import TutorialsList from "./TutorialsList";

function ArduinoTutorialsComponent() {
  return (
    <div
      className="p-10 text-center max-w-6xl mx-auto"
      style={{
        backgroundColor: "#F97316",
        backgroundImage: `url(${arduinoSvg})`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundSize: "80px 40px",
      }}
    >
      <h1
        className="font-bold text-6xl pb-14 text-white uppercase"
        style={{ fontFamily: "Rajdhani, sans-serif" }}
      >
        Arduino tutorials for beginners
      </h1>
      <br />
      <TutorialsList />
    </div>
  );
}

export default ArduinoTutorialsComponent;

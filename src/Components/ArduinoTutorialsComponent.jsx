import React from "react";
import orangeBackground from "../assets/orange-background.svg";
import TutorialsList from "./TutorialsList";
function ArduinoTutorialsComponent() {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover p-8 text-center max-w-6xl mx-auto"
      style={{ backgroundImage: `url(${orangeBackground})` }}
    >
      <h1 className="font-orbitron text-4xl text-white uppercase">
        Arduino tutorials for beginners
      </h1>
      <br />
      <TutorialsList />
    </div>
  );
}

export default ArduinoTutorialsComponent;

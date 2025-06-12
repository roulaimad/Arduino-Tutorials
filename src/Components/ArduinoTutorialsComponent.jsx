import React from "react";
import TutorialsList from "./TutorialsList";
import TitleSection from "./TitleSection";
import { Toaster } from "react-hot-toast";

function ArduinoTutorialsComponent() {
  return (
    <>
      <TitleSection />
      <TutorialsList />
    </>
  );
}

export default ArduinoTutorialsComponent;

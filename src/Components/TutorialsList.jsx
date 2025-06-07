import React from "react";
import TutorialCard from "./TutorialCard";
import arduinoTutorialsData from "../Data/ARDUINO-TUTORIAL-DATA";

function TutorialsList() {
  console.log(arduinoTutorialsData[0].image);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {arduinoTutorialsData.map((tutorial) => (
          <TutorialCard
            key={tutorial.id}
            image={tutorial.image}
            title={tutorial.title}
          />
        ))}
      </div>
    </div>
  );
}

export default TutorialsList;

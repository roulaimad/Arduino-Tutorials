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
            id={tutorial.id}
            image={tutorial.image}
            title={tutorial.title}
            description={tutorial.description}
            time={tutorial.time}
            tags={tutorial.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default TutorialsList;

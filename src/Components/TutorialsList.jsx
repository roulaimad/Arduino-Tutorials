import React from "react";
import TutorialCard from "./TutorialCard";
import arduinoTutorialsData from "../Data/ARDUINO-TUTORIAL-DATA";

function TutorialsList() {
  console.log(arduinoTutorialsData[0].image);

  return (
    <div className="p-10 text-center max-w-6xl mx-auto bg-[lightgray]">
      <div
        className="grid grid-cols-3 gap-4"
        style={{ fontFamily: "Cairo, sans-serif" }}
      >
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

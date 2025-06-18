import React from "react";
import TutorialCard from "./TutorialCard";
import arduinoTutorialsData from "../Data/ARDUINO-TUTORIAL-DATA";

function TutorialsList() {
  return (
    <div className="px-20 py-10 text-center shadow-2xl  mx-auto bg-slate-100">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
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
            difficulty={tutorial.difficulty}
          />
        ))}
      </div>
    </div>
  );
}

export default TutorialsList;

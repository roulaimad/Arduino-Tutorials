import React, { useEffect } from "react";
import TutorialCard from "./TutorialCard";
import arduinoTutorialsData from "../Data/ARDUINO-TUTORIAL-DATA";

function TutorialsList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-4 sm:px-10 py-10 text-center shadow-2xl mx-auto bg-slate-100">
      <div
        className="flex justify-center"
        style={{ fontFamily: "Cairo, sans-serif" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
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
              ratings={tutorial.ratings}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TutorialsList;

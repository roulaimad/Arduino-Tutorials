import React, { useEffect, useState } from "react";
import TutorialCard from "./TutorialCard";
import arduinoTutorialsData from "../Data/ARDUINO-TUTORIAL-DATA";

function TutorialsList() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("الكل");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredTutorials =
    selectedDifficulty === "الكل"
      ? arduinoTutorialsData
      : arduinoTutorialsData.filter(
          (tut) => tut.difficulty === selectedDifficulty
        );

  return (
    <div className="px-4 sm:px-10 py-10 text-center shadow-2xl mx-auto bg-slate-100">
      <div className="mb-6 flex justify-center">
        <select
          className="bg-white text-gray-800 font-medium border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
          style={{ fontFamily: "Cairo, sans-serif" }}
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
        >
          <option value="الكل">كل المستويات</option>
          <option value="مبتدئ">مبتدئ</option>
          <option value="متوسط">متوسط</option>
          <option value="متقدم">متقدم</option>
        </select>
      </div>

      <div
        className="flex justify-center"
        style={{ fontFamily: "Cairo, sans-serif" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {filteredTutorials.map((tutorial) => (
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

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import arduinoTutorialsData from "../Data/ARDUINO-TUTORIAL-DATA";
import YoutubeVideoComponent from "./YoutubeVideoComponent";
import TutorialDetailsComponent from "./TutorialDetailsComponent";
import TutorialHeader from "./TutorialHeader";
function TutorialDetailsPage() {
  const { id } = useParams();
  const title = arduinoTutorialsData[id - 1].title;
  const youtubeLink = arduinoTutorialsData[id - 1].youtubeLink;
  const image = arduinoTutorialsData[id - 1].image;
  const description = arduinoTutorialsData[id - 1].description;
  const tutorialGoals = arduinoTutorialsData[id - 1].tutorialGoals;
  const componentsNeeded = arduinoTutorialsData[id - 1].componentsNeeded;
  const code = arduinoTutorialsData[id - 1].arduinoCode;
  const circuit = arduinoTutorialsData[id - 1].circuit;
  const tags = arduinoTutorialsData[id - 1].tags;
  const difficulty = arduinoTutorialsData[id - 1].difficulty;
  const time = arduinoTutorialsData[id - 1].time;
  const ratings = arduinoTutorialsData[id - 1].ratings;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TutorialHeader
        title={title}
        description={description}
        tags={tags}
        difficulty={difficulty}
        time={time}
        ratings={ratings}
      />
      <YoutubeVideoComponent youtubeLink={youtubeLink} />
      <TutorialDetailsComponent
        title={title}
        description={description}
        goals={tutorialGoals}
        components={componentsNeeded}
        code={code}
        circuit={circuit}
      />
    </>
  );
}

export default TutorialDetailsPage;

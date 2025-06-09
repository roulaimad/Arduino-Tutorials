import React from "react";
import { useParams } from "react-router-dom";
import arduinoTutorialsData from "../Data/ARDUINO-TUTORIAL-DATA";
import YoutubeVideoComponent from "./YoutubeVideoComponent";
function TutorialDetailsPage() {
  const { id } = useParams();
  const title = arduinoTutorialsData[id - 1].title;
  const youtubeLink = arduinoTutorialsData[id - 1].youtubeLink;
  const image = arduinoTutorialsData[id - 1].image;
  const description = arduinoTutorialsData[id - 1].description;
  const tutorialGoals = arduinoTutorialsData[id - 1].tutorialGoals;
  const componentsNeeded = arduinoTutorialsData[id - 1].componentsNeeded;

  return <YoutubeVideoComponent youtubeLink={youtubeLink} title={title} />;
}

export default TutorialDetailsPage;

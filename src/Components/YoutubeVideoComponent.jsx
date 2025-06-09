import React from "react";
import { useParams } from "react-router-dom";
import arduinoTutorialsData from "../Data/ARDUINO-TUTORIAL-DATA";
import arduinoSvg from "../assets/arduino-svgrepo-com.svg";
function YoutubeVideoComponent({ youtubeLink, title }) {
  return (
    <div className="mb-2">
      <div
        className="p-10 text-center max-w-6xl mx-auto"
        style={{
          backgroundColor: "#F97316",
          backgroundImage: `url(${arduinoSvg})`,
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          backgroundSize: "80px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="relative w-full pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeLink.split("v=")[1]}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default YoutubeVideoComponent;

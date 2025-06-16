import React from "react";
function YoutubeVideoComponent({ youtubeLink }) {
  return (
    <div>
      <div className="p-10 max-w-6xl mx-auto pb-0">
        <div className="relative w-full pt-[56.25%] ">
          <iframe
            className="absolute top-0 left-0 w-full rounded-xl h-full"
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

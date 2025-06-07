import React from "react";

function TutorialCard({ id, image, title }) {
  return (
    <div className="text-center cursor-pointer">
      <div className="p-1 bg-white rounded-lg inline-block max-w-xs w-full">
        <img
          src={image}
          alt=""
          className="w-full h-40 object-cover rounded-md"
        />
      </div>
      <h2 className="mt-0 text-lg font-bold text-white max-w-xs w-full mx-auto">
        {id}# {title}
      </h2>
    </div>
  );
}

export default TutorialCard;

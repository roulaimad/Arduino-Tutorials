import React from "react";
import { Link } from "react-router-dom";
import TutorialDetailsPage from "./TutorialDetailsPage";
import { Play, Star, Users, Clock } from "lucide-react";

function TutorialCard({ id, image, title, description, time, tags, difficulty }) {
  return (
    <div className="bg-[#FFF9F1] shadow-2xl rounded-xl overflow-hidden w-80 p-4 relative">
      {/*=========== Difficulty badge ===========*/}
      <span className="absolute top-5 right-5 bg-yellow-300 text-sm text-gray-800 px-2 py-0.5 rounded-full font-medium">
        {difficulty}
      </span>

      {/*=========== Category tag ===========*/}
      <span className="absolute top-5 left-5 bg-gray-200 text-sm text-gray-700 px-2 py-0.5 rounded-full font-medium">
        {tags}
      </span>

      {/*=========== Image placeholder ===========*/}
      <div className="bg-gray-100 h-40 flex items-center justify-center rounded-lg mb-4">
        {/* <span className="text-gray-400"></span> */}
        <img src={image} />
      </div>

      {/*=========== Title ===========*/}
      <h2
        dir="rtl"
        title={title}
        className="text-lg font-bold text-gray-800 mb-1 text-right line-clamp-1"
      >
        {title}
      </h2>

      {/*=========== Description ===========*/}
      <p
        title={description}
        dir="rtl"
        className="text-sm text-gray-600 mb-4 text-right line-clamp-1"
      >
        {description}
      </p>

      {/*=========== Info Row ===========*/}
      <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400" />
          <span>4.9</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>756</span>
        </div>
        <div className="flex items-center gap-1">
          <span dir="rtl">{time} دقيقة</span>
          <Clock className="w-4 h-4" />
        </div>
      </div>

      {/* Button */}
      <Link to={`${id}`}>
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold flex justify-center items-center gap-2 cursor-pointer">
          <Play className="w-4 h-4" />
          ابدأ الدرس
        </button>
      </Link>
    </div>
  );
}

export default TutorialCard;

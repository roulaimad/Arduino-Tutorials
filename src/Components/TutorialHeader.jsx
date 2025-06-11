import React from "react";
import { Star, Users, Clock, StarIcon, User } from "lucide-react";

function TutorialHeader({
  title,
  description,
  tags,
  difficulty,
  time,
  ratings,
}) {
  return (
    <div dir="rtl" className="bg-orange-500 w-full h-53 p-4">
      <div className="flex flex-col text-white">
        {/* tags */}
        <div className="flex gap-5 pb-3">
          <div className="bg-orange-300 text-sm px-2 py-0.5 rounded-full font-medium">
            {tags}
          </div>
          <div className="bg-orange-300 text-sm px-2 py-0.5 rounded-full font-medium">
            {difficulty}
          </div>
        </div>
        {/* title */}
        <div className="text-4xl font-bold pb-4">{title}</div>
        {/* desc */}
        <div className="pb-3">{description}</div>
        {/* details */}
        <div className="flex gap-10">
          <div className="flex gap-2 items-center">
            <Clock className="w-4 h-4 text-white" />
            <div>{time} دقيقة</div>
          </div>
          <div className="flex gap-2 items-center">
            <Users className="w-4 h-4 text-white" />
            <div>64 متدرب</div>
          </div>
          <div className="flex gap-2 items-center">
            <Star className="w-4 h-4 text-white" />
            <div>{ratings}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TutorialHeader;

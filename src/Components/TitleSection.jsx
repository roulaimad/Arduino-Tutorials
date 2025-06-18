import React from "react";
import arduinoimg from "../assets/arduinogif.gif";

function TitleSection() {
  return (
    <div
      className="p-6 sm:p-10 mx-auto bg-[#F97316] flex flex-col md:flex-row mb-0"
      style={{ fontFamily: "Cairo, sans-serif" }}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
        <img
          src={arduinoimg}
          alt="Arduino Board"
          className="max-w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-right flex flex-col justify-center">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-6 sm:pb-10 text-white uppercase leading-tight">
          دروس أردوينو للمبتدئين
        </h1>
        <h2 className="font-medium text-lg sm:text-xl md:text-2xl text-white uppercase leading-relaxed">
          تعلم الإلكترونيات والبرمجة خطوة بخطوة مع دروس تفاعلية ومشاريع عملية
        </h2>
      </div>
    </div>
  );
}

export default TitleSection;

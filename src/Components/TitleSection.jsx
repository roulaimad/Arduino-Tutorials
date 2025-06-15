import React from "react";
import arduinoimg from "../assets/arduinogif.gif";

function TitleSection() {
  return (
    <div
      className="p-10  mx-auto bg-[#F97316] flex flex-row mb-0"
      style={{ fontFamily: "Cairo, sans-serif" }}
    >
      <div className="w-1/2 flex justify-center items-center">
        <img src={arduinoimg} alt="Arduino Board" className="max-w-full" />
      </div>
      <div className="w-1/2 text-right flex flex-col justify-center">
        <h1 className="font-bold text-6xl pb-10 text-white uppercase">
          دروس أردوينو للمبتدئين
        </h1>
        <h2 className="font-medium text-2xl text-white uppercase">
          تعلم الإلكترونيات والبرمجة خطوة بخطوة مع دروس تفاعلية ومشاريع عملية
        </h2>
      </div>
    </div>
  );
}

export default TitleSection;

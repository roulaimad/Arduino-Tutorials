import React from "react";
import CodeBlock from "./CodeBlock";
import {
  ArrowLeft,
  Box,
  Check,
  CheckCheck,
  CheckCircle,
  Circle,
  CircleArrowLeft,
  Goal,
} from "lucide-react";

function TutorialDetailsComponent({
  title,
  description,
  goals,
  components,
  code,
  circuit,
}) {
  return (
    <div style={{ fontFamily: "Cairo, sans-serif" }} dir="rtl">
      <div className="p-10 max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl text-right mb-6 font-extrabold">{title}</h1>

          <div className="text-right mb-8">
            <p>{description}</p>
          </div>

          <div className="bg-white text-black rounded-xl p-6 text-right mb-6">
            <div className="flex items-start gap-1">
              <Goal className="w-8 h-8 text-green-600" />
              <b className="block mb-5 text-2xl">أهداف الدرس</b>
            </div>
            {goals.map((goal, id) => (
              <div className="flex items-center gap-3 pr-6 bg-green-50 mb-2 rounded-b-2xl">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <p key={id} className="mb-3 ">
                  {goal}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-white text-black rounded-xl p-6 text-right mb-6">
            <div className="flex items-start gap-1">
              <Box className="w-6 h-6 text-green-600" />
              <b className="block mb-5 text-2xl">المكونات المطلوبة</b>
            </div>
            {components.map((component, id) => (
              <div className="flex items-center gap-3 pr-6 bg-green-50 mb-2 rounded-b-2xl">
                <CircleArrowLeft className="w-4 h-4 mb-1.5 text-green-600" />
                <p key={id} className="mb-3">
                  {component}
                </p>
              </div>
            ))}
          </div>
          <div dir="ltr">
            <CodeBlock code={code} language="javascript" />
          </div>
          <div className="bg-white text-black rounded-xl p-6 text-left mb-6">
            <b className="block mb-2 text-2xl">Circuit Diagram</b>
            <img src={circuit} alt="circuit image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TutorialDetailsComponent;

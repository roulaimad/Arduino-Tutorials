import React, { useState } from "react";
import CodeBlock from "./CodeBlock";
import toast from "react-hot-toast";
import {
  Box,
  CheckCircle,
  CircleArrowLeft,
  Goal,
  Copy,
  Code2,
} from "lucide-react";

function TutorialDetailsComponent({
  title,
  description,
  goals,
  components,
  code,
  circuit,
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    toast.success("تم النسخ بنجاح");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ fontFamily: "Cairo, sans-serif" }} dir="rtl">
      <div className="p-4 sm:p-10 max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl text-right mb-6 font-extrabold">
            {title}
          </h1>

          <div className="text-right mb-8">
            <p>{description}</p>
          </div>

          <div className="bg-white text-black rounded-xl p-6 text-right mb-6">
            <div className="flex items-start gap-1">
              <Goal className="w-8 h-8 text-green-600" />
              <b className="block mb-5 text-lg sm:text-xl lg:text-2xl">
                أهداف الدرس
              </b>
            </div>
            {goals.map((goal, id) => (
              <div
                key={id}
                className="flex items-center gap-3 pr-6 bg-green-50 mb-2 rounded-b-2xl"
              >
                <CheckCircle className="w-4 h-4 text-green-600" />
                <p className="mb-3">{goal}</p>
              </div>
            ))}
          </div>

          <div className="bg-white text-black rounded-xl p-6 text-right mb-6">
            <div className="flex items-start gap-1">
              <Box className="w-6 h-6 text-green-600" />
              <b className="block mb-5 text-lg sm:text-xl lg:text-2xl">
                المكونات المطلوبة
              </b>
            </div>
            {components.map((component, id) => (
              <div
                key={id}
                className="flex items-center gap-3 pr-6 bg-green-50 mb-2 rounded-b-2xl"
              >
                <CircleArrowLeft className="w-4 h-4 mb-1.5 text-green-600" />
                <p className="mb-3">{component}</p>
              </div>
            ))}
          </div>

          <div dir="ltr" className="mb-8">
            <div className="flex items-center justify-between">
              <button
                dir="rtl"
                onClick={copyToClipboard}
                className="flex items-center gap-2 text-sm bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
              >
                <Copy className="w-4 h-4" />
                {copied ? "تم النسخ!" : "نسخ الكود"}
              </button>
              <div className="flex mr-2 gap-2">
                <b
                  dir="rtl"
                  className="block mr-1 text-lg sm:text-xl lg:text-2xl"
                >
                  الكود البرمجي
                </b>
                <Code2 className="w-8 h-8 text-green-600" />
              </div>
            </div>

            <CodeBlock code={code} language="javascript" />
          </div>

          <div dir="rtl" className="bg-white text-black rounded-xl p-6 mb-6">
            <b className="block mb-10 text-lg sm:text-xl lg:text-2xl">
              دارة المشروع
            </b>
            <img src={circuit} alt="circuit image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TutorialDetailsComponent;

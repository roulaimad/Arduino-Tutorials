import React from "react";
import arduinoSvg2 from "../assets/arduino-svgrepo-com2.svg";
import CodeBlock from "./CodeBlock";

function TutorialDetailsComponent({
  title,
  description,
  goals,
  components,
  code,
  circuit,
}) {
  return (
    <div className="text-white">
      <div
        className="p-10 text-center max-w-6xl mx-auto"
        style={{
          backgroundColor: "#F99336",
          backgroundImage: `url(${arduinoSvg2})`,
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          backgroundSize: "80px 40px",
        }}
      >
        <div className="p-10 max-w-6xl mx-auto">
          <h1 className="text-5xl text-center mb-6 font-extrabold">{title}</h1>

          <div className="text-left mb-8">
            <p>{description}</p>
          </div>

          <div className="bg-white text-black rounded-xl p-6 text-left mb-6">
            <b className="block mb-2">Tutorial Goals</b>
            {goals.map((goal, id) => (
              <p key={id} className="mb-1">
                • {goal}
              </p>
            ))}
          </div>
          <div className="bg-white text-black rounded-xl p-6 text-left mb-6">
            <b className="block mb-2">Components Needed</b>
            {components.map((component, id) => (
              <p key={id} className="mb-1">
                • {component}
              </p>
            ))}
          </div>
          <CodeBlock code={code} language="javascript" />
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

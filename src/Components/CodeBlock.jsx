// CodeBlock.js
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeBlock({ code, language = "javascript" }) {
  return (
    <div className="my-6">
      <SyntaxHighlighter
        language={language}
        style={dracula}
        showLineNumbers
        customStyle={{
          borderRadius: "10px",
          padding: "10px",
          fontSize: "0.9rem",
          lineHeight: "1.5",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;

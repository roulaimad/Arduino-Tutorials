import React from "react";
import "./App.css";
import ArduinoTutorialsComponent from "./Components/ArduinoTutorialsComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TutorialDetailsPage from "./Components/TutorialDetailsPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArduinoTutorialsComponent />} />
        <Route path="/:id" element={<TutorialDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

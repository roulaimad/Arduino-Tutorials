import React from "react";
import "./App.css";
import ArduinoTutorialsComponent from "./Components/ArduinoTutorialsComponent";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import TutorialDetailsPage from "./Components/TutorialDetailsPage";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route
          path="/Arduino-Tutorials"
          element={<ArduinoTutorialsComponent />}
        />
        <Route
          path="/Arduino-Tutorials/:id"
          element={<TutorialDetailsPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;

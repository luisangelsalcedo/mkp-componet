import React from "react";
import "./App.css";
import Welcome from "./Welcome";

const App = () => {
  const names = ["Juan", "Pedro", "Germán"];

  return (
    <div>
      {names.map(name => (
        <Welcome name={name} key={name} />
      ))}
    </div>
  );
};

export default App;

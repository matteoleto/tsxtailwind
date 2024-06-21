import React, { useState } from "react";

import Rectangle from "./Rectangle"; // Assicurati di avere il percorso corretto
import Sidebar from "./Sidebar"; // Assicurati di avere il percorso corretto
import { ThemeContext } from "./ThemeContext";

const App: React.FC = () => {
  const [color, setColor] = useState<string>("blue");
  return (
    <div className="App flex">
      <ThemeContext.Provider value={{ color, setColor }}>
        <Sidebar />
        <Rectangle />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;

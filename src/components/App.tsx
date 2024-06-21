import React, { createContext, useState } from "react";

import Rectangle from "./Rectangle"; // Assicurati di avere il percorso corretto
import Sidebar from "./Sidebar"; // Assicurati di avere il percorso corretto

type ThemeContextType = {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

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

export { ThemeContext };
export default App;

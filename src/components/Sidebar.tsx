import React, { useContext } from "react";

// eslint-disable-next-line import/no-cycle
import { ThemeContext } from "./ThemeContext";

const Sidebar: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("ThemeContext must be used within a ThemeContext.Provider");
  }
  const { color, setColor } = themeContext;

  function cambiaColore(numInput: number): string {
    let coloreSelezionato = "";
    switch (numInput) {
      case 1:
        coloreSelezionato = "red";
        break;
      case 2:
        coloreSelezionato = "green";
        break;
      case 3:
        coloreSelezionato = "purple";
        break;
      case 4:
        coloreSelezionato = "yellow";
        break;
      default:
        coloreSelezionato = "blue";
        break;
    }
    return coloreSelezionato;
  }

  return (
    <div
      className={`bg-${color}-600 h-screen w-72 p-4 flex items-center justify-center`}
    >
      <div className="bg-gray-300 p-4 rounded-lg">
        <div className="flex flex-col gap-2">
          <button
            id="blue button"
            className="h-10 w-10 rounded-full bg-blue-600 shadow-xl hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transform transition-transform hover:-translate-y-2 active:translate-y-0 active:shadow-none text-blue-600"
            onClick={() => setColor(cambiaColore(0))}
          ></button>
          <button
            id="red button"
            className="h-10 w-10 rounded-full bg-red-600 shadow-xl hover:bg-red-700 focus:ring-4 focus:ring-red-300 transform transition-transform hover:-translate-y-2 active:translate-y-0 active:shadow-none text-blue-600"
            onClick={() => setColor(cambiaColore(1))}
          ></button>
          <button
            id="green button"
            className="h-10 w-10 rounded-full bg-green-600 shadow-xl hover:bg-green-700 focus:ring-4 focus:ring-green-300 transform transition-transform hover:-translate-y-2 active:translate-y-0 active:shadow-none text-blue-600"
            onClick={() => setColor(cambiaColore(2))}
          ></button>
          <button
            id="purple button"
            className="h-10 w-10 rounded-full bg-purple-600 shadow-xl hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 transform transition-transform hover:-translate-y-2 active:translate-y-0 active:shadow-none text-blue-600"
            onClick={() => setColor(cambiaColore(3))}
          ></button>
          <button
            id="yellow button"
            className="h-10 w-10 rounded-full bg-yellow-600 shadow-xl hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 transform transition-transform hover:-translate-y-2 active:translate-y-0 active:shadow-none text-blue-600"
            onClick={() => setColor(cambiaColore(4))}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

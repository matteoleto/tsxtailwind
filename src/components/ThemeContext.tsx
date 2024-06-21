import { createContext } from "react";

type ThemeContextType = {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
};
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

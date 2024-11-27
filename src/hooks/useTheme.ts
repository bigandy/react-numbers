import { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeContext";

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("themeContext has to be use within ThemeContext.Provider");
  }

  return themeContext;
};

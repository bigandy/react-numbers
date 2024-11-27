import { useContext } from "react";

import { SettingsContext } from "../contexts/SettingsContext";

export const useSettings = () => {
  const settingsContext = useContext(SettingsContext);

  if (!settingsContext) {
    throw new Error(
      "Settings Context has to be use within SettingsContext.Provider"
    );
  }

  return settingsContext;
};

"use client";

import { createContext, useState } from "react";

type Settings = {
  rate: string;
};

interface Context {
  settings: Settings;
  updateSetting: (value: string, setting: [keyof Settings]) => void;
}

export const SettingsContext = createContext<Context | null>(null);

const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState = {
    rate: "1.0",
  };
  const [settings, setSettings] = useState(initialState);

  const updateSetting = (value: string, setting: [keyof Settings]) => {
    console.log({ value, setting });

    setSettings((prevState) => {
      const newState = { ...prevState };

      newState[setting] = value;

      return newState;
    });
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;

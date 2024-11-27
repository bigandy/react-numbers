import { version } from "react";
import SettingsProvider from "@contexts/SettingsContext";
import ThemeProvider from "@contexts/ThemeContext";

import ThemeSwitcher from "@components/ThemeSwitcher";
import CurrentTheme from "@components/CurrentTheme";
import Settings from "@components/Settings";
import Voices from "@components/Voices";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <SettingsProvider>{children}</SettingsProvider>
    </ThemeProvider>
  );
};

function App() {
  return (
    <Providers>
      <div>
        <ThemeSwitcher />

        <CurrentTheme />
        <p>Currently using React {version}</p>

        <Settings />

        <Voices />
      </div>
    </Providers>
  );
}

export default App;

import { useTheme } from "@hooks/useTheme";

const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <>
      <button onClick={toggleTheme}>Switch Theme</button>
    </>
  );
};

export default ThemeSwitcher;

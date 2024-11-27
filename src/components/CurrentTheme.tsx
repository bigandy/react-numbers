import { useTheme } from "../hooks/useTheme";

const CurrentTheme = () => {
  const { theme } = useTheme();

  return <p>Current theme is {theme}</p>;
};

export default CurrentTheme;

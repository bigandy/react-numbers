import { useSettings } from "../hooks/useSettings";

import Popover from "./Popover";

const ThemeSwitcher = () => {
  const {
    settings: { rate },
    updateSetting,
  } = useSettings();

  // const [open, setOpen] = useState(false);

  const handleRateChange = (e) => {
    console.log(e.target.value);

    updateSetting(e.target.value, ["rate"]);
  };

  return (
    <>
      <Popover buttonText="Open The Settings Modal">
        <p>Some content that goes inside the Popover</p>

        <input
          type="range"
          min="0"
          max="2"
          step="0.1"
          value={rate}
          onChange={handleRateChange}
        />

        <p>{rate}</p>
      </Popover>

      <br />
      <br />
    </>
  );
};

export default ThemeSwitcher;

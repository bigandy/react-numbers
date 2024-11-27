import { useState } from "react";

const synth = window.speechSynthesis;

const Voices = () => {
  const voice = synth
    .getVoices()
    .filter((lang) => lang.lang === "fr-FR")
    .at(-1);

  const [text, setText] = useState("bonjour à tous");
  const [rate, setRate] = useState("1.0");
  const [pitch, setPitch] = useState("1.0");

  const speak = async () => {
    const utterance = new SpeechSynthesisUtterance(text);

    if (voice) {
      utterance.voice = voice;
    }

    if (rate) {
      utterance.rate = Number(rate);
    }

    if (pitch) {
      utterance.pitch = Number(pitch);
    }

    synth.speak(utterance);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    speak();
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="row">
        <label htmlFor="text">Text to speak:</label>
        <input
          id="text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="row">
        <label htmlFor="rate">Rate:</label>
        <input
          type="range"
          min="0"
          max="1.5"
          step="0.1"
          onChange={(e) => setRate(e.target.value)}
          value={rate}
          id="rate"
        />
        <output>{rate}</output>
      </div>

      <div className="row">
        <label htmlFor="pitch">Pitch:</label>
        <input
          type="range"
          min="0"
          max="1.5"
          step="0.1"
          onChange={(e) => setPitch(e.target.value)}
          value={pitch}
          id="pitch"
        />
        <output>{pitch}</output>
      </div>

      <button>Play Some Voices</button>
    </form>
  );
};

export default Voices;

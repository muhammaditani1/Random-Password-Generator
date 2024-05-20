import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Generate.css";

export default function Generate() {
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("");
  const [copyStatus, setCopyStatus] = useState(false);

  // Copy functionality
  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000); // Reset status after 2 seconds
  };

  function onClickModeHandler(type) {
    console.log("Mode selected:", type);
    setMode(type);
    onGeneratePassword(type);
  }

  function onGeneratePassword(type) {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    let characters = "";

    switch (type) {
      case "capital":
        characters = upperCase;
        break;
      case "small":
        characters = lowerCase;
        break;
      case "mixed":
        characters = upperCase + lowerCase;
        break;
      case "numbers":
        characters = upperCase + lowerCase + numbers;
        break;
      default:
        characters = upperCase;
    }
    let result = "";
    const length = characters.length;
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * length));
    }

    setPassword(result);
  }

  return (
    <div className="generator-container">
      <div className="output-container">
        <div >{password}</div>
        <CopyToClipboard text={password} onCopy={onCopyText}>
          <button>
            <FontAwesomeIcon icon={faCopy} size="2x" />
          </button>
        </CopyToClipboard>
        {copyStatus && <div className="copy-status">Copied!</div>}
      </div>
      <div className="button-container">
        <button
          className={`Capital ${mode === "capital" ? "active" : ""}`}
          onClick={() => onClickModeHandler("capital")}
        >
          Upper Case
        </button>
        <button
          className={`LowerCase ${mode === "small" ? "active" : ""}`}
          onClick={() => onClickModeHandler("small")}
        >
          Lower Case
        </button>
        <button
          className={` ${mode === "mixed" ? "active" : ""}`}
          onClick={() => onClickModeHandler("mixed")}
        >
          UPPER/lower case
        </button>
        <button
          className={` ${mode === "numbers" ? "active" : ""}`}
          onClick={() => onClickModeHandler("numbers")}
        >
          With Numbers
        </button>
      </div>
    </div>
  );
}

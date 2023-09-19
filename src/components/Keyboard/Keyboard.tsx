import React, { useEffect, useState } from "react";
import alphabets from "./Alphabets.js";
import "./Keyboard.css";

const Keyboard = (props: any) => {
  const {
    currentWord,
    setCurrentWord,
    setShowChar,
    showChar,
    showWord,
    setShowWord,
    setCounter,
    counter,
  } = props;
  const [selectedKey, setSelectedKey] = useState<string>();
  const [disableKey, setDisableKey] = useState<any>([]);

  const selectKey = (key: string) => {
    setSelectedKey(key);
    setDisableKey((prevKey: any) => [...prevKey, key]);
  };

  useEffect(() => {
    if (currentWord && selectedKey) {
      if (currentWord.includes(selectedKey)) {
        setShowWord(true);
        setShowChar(selectedKey);
      } else {
        setShowWord(false);
        setShowChar("");
        setCounter((prevArr: any) => [...prevArr, "inc"]);
      }
    }
  }, [selectedKey]);

  return (
    <div className="keyboard">
      <div className="list">
        {alphabets.map((key: string) => {
          return (
            <div
              className={
                disableKey.includes(key) || counter.length === 7
                  ? "alphabet-disable"
                  : "alphabet"
              }
              onClick={() => selectKey(key)}
            >
              {key.toLowerCase()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;

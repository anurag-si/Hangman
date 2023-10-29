import React, { useEffect, useState } from "react";
import words from "./Words";
import "./Words.css";

const CurrentWord = (props: any) => {
  const {
    currentWord,
    setCurrentWord,
    selectedIndex,
    setSelectedIndex,
    showChar,
    setArr,
    Arr,
    counter,
    setCounter,
  } = props;
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setSelectedIndex(Math.floor(Math.random() * words.length));
  }, []);

  useEffect(() => {
    setCurrentWord(words[selectedIndex]);
  }, [selectedIndex]);

  useEffect(() => {
    if (showChar) {
      setArr((prevArr: any) => [...prevArr, showChar]);
    }
  }, [showChar]);

  useEffect(() => {
    console.log(currentWord);
    currentWord && setCharacters(currentWord.split(""));
  }, [currentWord]);

  return (
    <>
      <div className="currentWord">
        {characters &&
          counter.length !== 7 &&
          characters.map((char: any) => {
            return (
              <>
                <h2 className="word">{Arr.includes(char) && char} &nbsp;</h2>
              </>
            );
          })}
        <h2 className="word">{counter.length === 7 && <>{currentWord}</>}</h2>
      </div>
    </>
  );
};

export default CurrentWord;

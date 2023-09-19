import React, { useEffect, useState } from "react";
import words from "./Words";

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
      {characters &&
        counter.length !== 7 &&
        characters.map((char: any) => {
          return <>{Arr.includes(char) && char} &nbsp;</>;
        })}
      {counter.length === 7 && <>{currentWord}</>}
    </>
  );
};

export default CurrentWord;

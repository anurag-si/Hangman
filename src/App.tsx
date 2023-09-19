import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Keyboard from "./components/Keyboard/Keyboard";
import Drawing from "./components/Drawing/Drawing";
import CurrentWord from "./components/Words/CurrentWord";

function App() {
  const [selectedIndex, setSelectedIndex] = useState<any>();
  const [currentWord, setCurrentWord] = useState<any>("");
  const [showChar, setShowChar] = useState();
  const [showWord, setShowWord] = useState(false);
  const [Arr, setArr] = useState<string[]>([]);
  const [counter, setCounter] = useState<number[]>([]);

  console.log(counter, "counter");
  return (
    <div className="App">
      <Keyboard
        showChar={showChar}
        setShowChar={setShowChar}
        currentWord={currentWord}
        setCurrentWord={setCurrentWord}
        showWord={showWord}
        setShowWord={setShowWord}
        counter={counter}
        setCounter={setCounter}
      />
      <Drawing counter={counter} />
      <CurrentWord
        showChar={showChar}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        currentWord={currentWord}
        setCurrentWord={setCurrentWord}
        setShowWord={setShowWord}
        showWord={showWord}
        Arr={Arr}
        setArr={setArr}
        counter={counter}
        setCounter={setCounter}
      />
    </div>
  );
}

export default App;

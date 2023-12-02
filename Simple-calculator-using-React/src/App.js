/*
Simple Calculator App

Author: Suhas Tumati
Date: 02/08/2023

*/

import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const operatorRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  /* CLEARS ENTRY only */
  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  /*improved so that it resets BOTH result and input*/
  const resetResult = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
    setResult(null);
  };

  return (
    <div className="App">
      <div id="calculator">
        <form>
          <p ref={resultRef}>{result}</p>
          <input
            pattern="[0-9]"
            ref={inputRef}
            type="number"
            placeholder="Type a number"
          />

          <button onClick={plus}>+</button>
          <button onClick={minus}>-</button>
          <button onClick={times}>*</button>
          <button onClick={divide}>/</button>
          <button onClick={resetInput}>CE</button>
          <button onClick={resetResult}>C</button>
        </form>
      </div>
      <div>
        <p>Simple React Calculator Example</p>
        <p>
          <a href="https://github.com/d31a"> Ben Bagley </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default App;

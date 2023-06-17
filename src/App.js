import React from "react";
import { useState } from "react";
import "./index.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [charcount, setCharcount] = useState(0);
  const [maxlen, setMaxlen] = useState(0);
  const [size, setSize] = useState(0);

  let change = (e) => {
    wordcount(e.target.value);
  };

  function wordcount(str) {
    let c = 0;
    let str1 = str.split(" ");
    charCout(str);

    for (let i = 0; i < str1.length; i++) {
      if (str1.length === 0) {
        setCount(0);
      }
      if (str1[i] !== "") {
        c++;
      }
      setCount(c);
    }
  }

  function charCout(str) {
    let c = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        c++;
      }
    }
    setCharcount(c);
  }
  let maxfun = (e) => {
    setMaxlen(e.target.value);
  };

  const sizechange = (e) => {
    setSize(e.target.value);
  };

  return (
    <div className="main">
      <div className="file">
        <h1>Responsive Paragraph Word Counter</h1>
        <br />
        <br />
        <label>Font size picker  </label> &nbsp; &nbsp;
        <input type="range" min="16" max="32" onChange={sizechange}></input>&nbsp;&nbsp;&nbsp;
        <label>Word limit input  </label>&nbsp;&nbsp;&nbsp;
        <input type="number" onChange={maxfun} id="char-limit-input" />
        <br />

        <div class="container">
        <textarea
          onChange={change}
          maxLength={maxlen}
          style={{ fontSize: `${size}px` }}
        ></textarea>
        </div>
        <div id="word-counter"><h3>Total number of words written :{count}</h3></div>
        <br />
        <div id="char-counter">Total number of char count :{charcount} </div>
      </div>
    </div>
  );
};

export default App;

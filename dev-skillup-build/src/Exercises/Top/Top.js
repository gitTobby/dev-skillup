import React, { useState } from 'react';
import Highlight from 'react-highlight';

const Top = () => {
  const [inputNum, setInputNum] = useState();
  const [text, setText] = useState();

  const numRow = (rows) => {
    var result = [];
    for (let row = 0; row < rows; row++) {
      var arr = [];
      for (let col = 0; col <= row; col++) {
        arr.push(calc(row, col));
      }
      result.push(arr);
    }
    return result;
  };

  const calc = (row, col) => {
    if (col === 0 || col === row) {
      return 1;
    } else {
      return calc(row - 1, col - 1) + calc(row - 1, col);
    }
  };

  const printNumber = (inputNum) => {
    const output = numRow(inputNum);
    for (let i = 0; i < inputNum; i++) {
      const all = '[' + output[i] + ']';
      setText(all);
      console.log(all);
    }
  };

  const handleClick = () => {
    printNumber(inputNum);
  };

  return (
    <div className="container ex-top">
      <h1 className="subject">대현이의 탑</h1>
      <div className="split-box">
        <div className="col left">
          <Highlight>
            {`const numRow = (rows) => {
  var result = [];
  for (let row = 0; row < rows; row++) {
    var arr = [];
    for (let col = 0; col <= row; col++) {
      arr.push(calc(row, col));
    }
    result.push(arr);
  }
  return result;
};

const calc = (row, col) => {
  if (col === 0 || col === row) {
    return 1;
  } else {
    return calc(row - 1, col - 1) + calc(row - 1, col);
  }
};`}
          </Highlight>
        </div>
        <div className="col right">
          <div className="">
            <input
              type="text"
              className="inp-num"
              onChange={(e) => setInputNum(e.target.value)}
            />
            <button type="button" className="btn-num" onClick={handleClick}>
              확인
            </button>
          </div>
          <div id="output">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Top;

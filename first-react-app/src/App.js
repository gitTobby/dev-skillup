import React, { useState, useEffect } from "react";
import "./app.css";

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [currentInput, setCurrentInput] = useState("");
  const [numList, setNumList] = useState([]);
  const [undoList, setUndoList] = useState([]);

  useEffect(() => {
    // btnCheck();
  });

  const emptyMsg = (msg) => {
    alert(msg);
  };

  const handleClick = (e) => {
    const targetBtn = e.target.id;
    if (targetBtn === "addButton") calculator("plus");
    if (targetBtn === "subButton") calculator("minus");
    if (targetBtn === "undoButton") revert("undo");
    if (targetBtn === "redoButton") revert("redo");

    console.log(targetBtn);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setCurrentInput(Number(inputValue));
  };

  const resetInput = () => {
    setCurrentInput("");
  };

  const calculator = (rule) => {
    if (currentInput === "") {
      emptyMsg("값을 입력하세요!");
      return false;
    }

    if (rule === "plus") {
      const totalValue = currentValue + currentInput;
      setCurrentValue(totalValue);
      numList.push(currentInput);
    } else if (rule === "minus") {
      const totalValue = currentValue - Math.abs(currentInput);
      setCurrentValue(totalValue);
      numList.push(-currentInput);
    }

    btnCheck();

    console.log(numList);
    console.log(undoList);
    resetInput();
  };

  const revert = (btnTyupe) => {
    if (btnTyupe === "undo") {
      const prevValue = numList.pop();
      undoList.push(prevValue);
      const totalValue = currentValue - Math.abs(currentInput);
      setCurrentValue(totalValue);
    } else if (btnTyupe === "redo") {
      const nextValue = undoList.pop();
      numList.push(nextValue);
      const totalValue = currentValue + currentInput;
      setCurrentValue(totalValue);
    }

    btnCheck();
    // console.log(btnTyupe);
  };

  const btnCheck = () => {
    if (numList.length > 0) {
      document.getElementById("undoButton").disabled = false;
    } else {
      document.getElementById("undoButton").disabled = true;
    }

    if (undoList.length > 0) {
      document.getElementById("redoButton").disabled = false;
    } else {
      document.getElementById("redoButton").disabled = true;
    }

    console.log("NumLength: " + numList.length);
    console.log("UndoLength: " + undoList.length);
  };

  return (
    <div className="container">
      <div id="valuebox" className="counter">
        {currentValue}
      </div>
      {/* <input id="inputbox" className="input" type="text" onKeyPress={handleKeyPress()} /> */}
      <input id="inputbox" className="input" type="text" onChange={handleChange} value={currentInput} />
      <div className="btnGroup">
        <button id="undoButton" className="btn" onClick={handleClick}>
          Undo
        </button>
        <button id="addButton" className="btn" onClick={handleClick}>
          +
        </button>
        <button id="subButton" className="btn" onClick={handleClick}>
          -
        </button>
        <button id="redoButton" className="btn" onClick={handleClick}>
          Redo
        </button>
      </div>
    </div>
  );
}

export default App;

// input에 숫자를 입력하고 + 버튼을 클릭하면 결과값에 입력한 숫자 만큼 더해지고 input의 값은 없어진다.
// input에 숫자를 입력하고 - 버튼을 클릭하면 결과값에 입력한 숫자 만큼 빼지고 input의 값은 없어진다.
// input에 유효하지 않은 숫자를 입력하고 +, - 버튼을 클릭하면 동작은 무시 되되고 input의 값은 없어진다.(정수만 입력할 수 있다.)

// undo를 클릭하면 이전 값으로 돌아간다. undo 버튼을 클릭해도 이전 인풋값은 유지 된다.
// redo를 클릭하면 이후 값으로 되돌린다. redo 버튼을 클릭해도 이전 인풋값은 유지 된다.
// undo와 redo는 동작이 가능할때만 활성화 상태가 된다.

// input에 유효한 숫자를 입력하고 +, - 버튼을 클릭했을때 이후 값들은 없어지고 Redo 버튼은 비활성화된다.
// -> 1 입력 후 + : 결과값 1
// -> 2 입력 후 + : 결과값 3
// -> 3 입력 후 + : " 결과값 6
// -> undo 버튼 : 결과값 3
// -> 4 입력 후 + : 결과값 7
// -> undo 버튼 : 결과값 3 -> redo 버튼 활성화
// -> undo 버튼 : 결과값 1
// -> undo 버튼 : 결과갑 0 -> undo 버튼 비활성화
// -> redo 버튼 : 결과갑 1 -> undo 버튼 활성화

function onload() {
  var undoButton = document.getElementById("undoButton");
  var addButton = document.getElementById("addButton");
  var subButton = document.getElementById("subButton");
  var redoButton = document.getElementById("redoButton");

  undoButton.onclick = undo;
  addButton.onclick = increasement;
  subButton.onclick = decreasement;
  redoButton.onclick = redo;
}

const value = document.getElementById("valuebox");
const input = document.getElementById("inputbox");

function InputNumCheck(e) {
  if (e.keyCode < 48 || e.keyCode > 57) {
    alert("숫자만 입력하세요!");
    return false;
  } else {
    return true;
  }
}

function emptyMsg(msg) {
  alert(msg);
}

function increasement() {
  let currentValue = Number(value.innerText);
  let inputText = document.getElementById("inputbox").value;
  let inputValue = Number(inputText);

  if (inputText === "") {
    emptyMsg("값을 입력하세요!");
    return false;
  }

  let totalValue = currentValue + inputValue;
  value.innerText = totalValue;

  numList.push(inputValue);
  document.getElementById("inputbox").value = "";
  console.log(numList);

  btnCheck();
}

function decreasement() {
  let currentValue = Number(value.innerText);
  let inputText = document.getElementById("inputbox").value;
  let inputValue = Number(inputText);

  if (inputText === "") {
    emptyMsg("값을 입력하세요!");
    return false;
  }

  let totalValue = currentValue - Math.abs(inputValue);
  value.innerText = totalValue;

  numList.push(-inputValue);
  document.getElementById("inputbox").value = "";
  console.log(numList);

  btnCheck();
}

var numList = [];
var undoList = [];

function undo() {
  var lastValue = numList.pop();
  undoList.push(lastValue);

  let currentValue = Number(value.innerText);

  input.value = lastValue;
  value.innerText = currentValue - lastValue;

  btnCheck();

  console.log("undo");
  console.log(lastValue);
  console.log(numList);
  console.log(undoList);
}
function redo() {
  var lastValue = undoList.pop();
  numList.push(lastValue);

  let currentValue = Number(value.innerText);

  input.value = lastValue;
  value.innerText = currentValue + lastValue;

  btnCheck();

  console.log("redo");
  console.log(lastValue);
  console.log(numList);
  console.log(undoList);
}

function btnCheck() {
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
}

// 버그1: undo/redo 시 input이 마이너스 값일 경우 undo/redo는 괜찮은데 +/- 할 경우 문제가 생김

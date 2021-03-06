import { debounce } from "../function";
//문자 제거
function removeChar(event) {
  event = event || window.event;
  var keyID = event.which ? event.which : event.keyCode;
  if (keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39) return;
  //숫자와 소수점만 입력가능
  else event.target.value = event.target.value.replace(/[^\.0-9]/g, "");
}
//콤마 찍기
export function comma(obj) {
  var regx = new RegExp(/(-?\d+)(\d{3})/);
  var bExists = obj.indexOf(".", 0); //0번째부터 .을 찾는다.
  var strArr = obj.split(".");
  while (regx.test(strArr[0])) {
    //문자열에 정규식 특수문자가 포함되어 있는지 체크
    //정수 부분에만 콤마 달기
    strArr[0] = strArr[0].replace(regx, "$1,$2"); //콤마추가하기
  }
  if (bExists > -1) {
    //. 소수점 문자열이 발견되지 않을 경우 -1 반환
    strArr[1] = strArr[1].substring(0, 9); // 소수점 자리 제한
    obj = strArr[0] + "." + strArr[1];
  } else {
    //정수만 있을경우 //소수점 문자열 존재하면 양수 반환
    obj = strArr[0];
  }
  return obj; //문자열 반환
}

//콤마 풀기
export function uncomma(str) {
  str = "" + str.replace(/,/gi, ""); // 콤마 제거
  str = str.replace(/(^\s*)|(\s*$)/g, ""); // trim()공백,문자열 제거
  return new Number(str); //문자열을 숫자로 반환
}

export function convertNumber(value) {
  const existDot = value.indexOf(".", 0);
  const splitArr = value.split(".");
  splitArr[0] = uncomma(splitArr[0]);

  let realValue;
  if (existDot > -1) {
    realValue = splitArr[0] + Number(`${0}.` + `${splitArr[1]}`);
  } else {
    realValue = splitArr[0];
  }

  return realValue;
}

// export const amountInputVerify = () => {
const withdrawPossibles = Array.from(
  document.querySelectorAll(".withdraw-possible")
);
const maxInputs = Array.from(document.querySelectorAll(".max-input"));
const totalPlusFee = Array.from(
  document.querySelectorAll(".total-plus-fee dd")
);

if (maxInputs !== null) {
  maxInputs.map((input, i) => {
    let inputValue; //input value 오리지날
    let numberInputValue; // input value 콤마 제거 (number 화)
    let maxAmount; //출금 가능 수량 오리지날
    let numberMaxAmount; // 출금 가능 수얀 콤마 제거 (number 화)
    let totalAmount; // input value + 수수료

    withdrawPossibles.map((withdraw, j) => {
      if (i == j) {
        maxAmount = withdraw.textContent;
        numberMaxAmount = parseFloat(maxAmount.replace(/,/gi, ""));
      }
    });

    input.addEventListener(
      "keyup",
      debounce((e) => {
        removeChar(e);
        e.target.value = comma(e.target.value);

        inputValue = e.target.value;
        console.log(inputValue);
        numberInputValue = convertNumber(inputValue);

        totalAmount = numberInputValue + 0.02;

        if (numberInputValue > numberMaxAmount) {
          e.target.value = maxAmount;
          totalAmount = numberMaxAmount + 0.02;
        }

        if (inputValue == "") {
          totalAmount = "0.0";
        }

        totalAmount = totalAmount.toString();
        totalAmount = comma(totalAmount);

        totalPlusFee.map((target, j) => {
          if (i == j) {
            const input = target.nextElementSibling;
            target.textContent = totalAmount;
            input.value = convertNumber(totalAmount);
          }
        });
      })
    );
  });
}
// };

// amountInputVerify();

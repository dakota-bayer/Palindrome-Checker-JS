const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");

checkButton.addEventListener("click", checkPalindrome);

function checkPalindrome() {
  if (textInput.value === "") {
    alert("Please input a value");
    return;
  }
  const original = textInput.value;
  let cleaned = cleanStr(original);
  cleaned = cleaned.toLowerCase();
  const isPalindrome = DetermineIfPalindrome(cleaned);
  printResult(original, isPalindrome);
}

function cleanStr(str) {
  const regex = /[.,_-\s]/g;
  return str.replace(regex, "");
}

function DetermineIfPalindrome(word) {
  let k = word.length - 1;
  for (let i = 0; i < Number(word.length) / 2; i++) {
    //console.log(`copmaring ${word.charAt(i)} and ${word.charAt(k)}`);
    const firstChar = word.charAt(i);
    const secondChar = word.charAt(k);
    const ignoreComparison = DetermineIfIgnore(firstChar, secondChar);
    if (!ignoreComparison && firstChar !== secondChar) {
      return false;
    }
    k--;
  }
  return true;
}

function DetermineIfIgnore(firstChar, secondChar) {
  if (
    (firstChar == "(" && secondChar == ")") ||
    (firstChar == ")" && secondChar == "(") ||
    (firstChar == "/" && secondChar == "\\") ||
    (firstChar == "\\" && secondChar == "/")
  ) {
    return true;
  }
  return false;
}

function printResult(word, isPalindrome) {
  const resultStr = `${word} is ${isPalindrome ? "" : "not "}a palindrome`;
  resultText.innerText = resultStr;
}

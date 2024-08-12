const textInput = document.getElementById('text-input');
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");

//checkButton.addEventListener("click", checkPalindrome);

function checkPalindrome() {
    console.log(`entered checkPalindrome(). Text in input is ${textInput.value}`);
  const original = textInput.value;
  let cleaned = cleanStr(original);
  cleaned = cleaned.toLowerCase();
  const isPalindrome = isPalindrome2(cleaned);
  printResult(original, isPalindrome);
}

function cleanStr(str) {
    console.log(`entered cleanStr() for ${str}`);
  const regex = /[.,_\s]/g;
  return str.replace(regex, "");
}

function isPalindrome2(word) {
    console.log(`entered isPalidrome2() for ${word}`);
    // Is the characters in this string form a palindrome?
  const k = word.length - 1;
  console.log(`word.length is ${word.length}`)
  for (let i = 0; i < word.lenth / 2; i++) {

    console.log(`copmaring ${word.charAt(i)} and ${word.charAt(k)}`);
    if(word.charAt(i) !== word.charAt(k)){
        return false;
    }
    k--;

  }
  return true;
}

function printResult(word, isPalindrome) {
    console.log("entered printResult()");
  const resultStr = `${word} is ${isPalindrome ? "" : "not "}a palindrome`;
  console.log(resultStr);
  resultText.innerText = resultStr;
}

checkButton.addEventListener("click", checkPalindrome);

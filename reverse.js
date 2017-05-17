let reverseString = str => {
  let charArray = str.split("");
  let reverseCharArray = [];
  for (let z = charArray.length - 1; z >= 0; z--) {
    reverseCharArray.push(charArray[z]);
  }
  reverseStr = reverseCharArray.join("");
  return reverseStr;
}

console.log(reverseString("Howdy"));


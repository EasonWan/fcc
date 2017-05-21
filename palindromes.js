let pal = function(str) {
  let lowerCaseStr = str.toLowerCase();
  let rawSStr = lowerCaseStr.replace(/[^A-Z0-9]/ig, "");
  let charArray = rawSStr.split("")
  let reverseCharArray = charArray.reverse()
  let reverseRawStr = reverseCharArray.join("")
  if (reverseRawStr == rawSStr) {
    return true
  } else {
    return false
  }
}

console.log(pal("1 eye for of 1 eye."));
console.log(pal("eye"));
let confirmEnding = function(str, target) {

  return str.substr(-target.length) === target;
}


console.log(confirmEnding("Bastian", "n"));

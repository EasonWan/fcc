let chunkArrayInGroups = function(ar, num){
 var results = [];
  while (ar.length) {
    results.push(ar.splice(0, num));
  }
  return results;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
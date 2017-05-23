
// let foo = function(arr){
  
//   for (i = 0; i<arr.length; i++) {

//     // if (i >= 3; <=6;) {
//     arr.shift;

//     return arr;
//     }
//   }
// }


// let foo = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 9 && arr[i] <14) {
//       console.log(arr[i])
//     }
//   }
//   return null
// }

// let foo = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     if (i >= 3 && i <= 6) {
//       console.log(arr[i])
//     }
//   }
//   return null
// }

// let foo = arr => {
//   for (let i = 3; i <= 6; i++) {
//     console.log(arr[i])
//   }
// }

// foo([7,8,9,10,11,12,13,14,15]);




let foo = function(arr, any){

  var count = 0;
  for (var i = 0; i<arr.length; i++){
    if (arr[i] == any){
      count++;
    } 
  }
  return count;
}

console.log(foo(['a','c','d','c','b','c','b'],'b'));

console.log(foo(['a','c','d','c','b','c','b'],'a'));

console.log(foo(['a','c','d','c','b','c','b'],'c'));
console.log(foo(['a','c','d','c','b','c','b'],'d'));

//1st

let foo = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (i >= 3 && i <= 6) {
      console.log(arr[i])
    }
  }
  return null
}

let foo = arr => {
  for (let i = 3; i <= 6; i++) {
    console.log(arr[i])
  }
}

foo([7,8,9,10,11,12,13,14,15]);

// What this code will become in process is 
// first run

for (let i = 0; i < arr.length; i++) {
  // created a variable i = 0 and it is smaller than arr.length which is 9
  if (i >= 3 && i <= 6) {
  // if i is bigger or equal to 3
  // if i is smaller or equal to 6
  // put in the i into arr[i]
    console.log(arr[i])
  // on first run 
  // it will return nothing because 0(index) is 7 therefore
  // not big or equal to 3 
  // then it will be i+1 on the second run
  // until it is bigger or equal to 3 then it will take out 
  // the value and put into arr[i]
  }
}
return null

}

foo([7,8,9,10,11,12,13,14,15]);


// 2nd 

let destroyer = function(arr) {
  // we created a function call destroyer and it have paramater(arr)
  // we created a variable call i and have the value 1
  for (let i = 1; i < arguments.length; i++) {
    // and i(index) is smaller than arguments.length )
    for (let j = arr.length - 1; j >= 0; j--) {
      // we created a variable j and the value is arr.length
      // which is 6 and minus by 1
      // did the minus 1 in order to get the last element in the array
      // we also let the code know that j is equal or bigger than 0
      // if it's not bigger/equal than arr.length then it will stop minus
      if (arguments[i] == arr[j]) {
        // first run we will compare i which is 1 on first run
        // and yes it will run because 1 is smaller than argument.length
        // which is 0,1,2 == 2 is argument length we are on 1 now
        // first run for j will be arr.length which is j = 6
        // beause .length will show number of element not start from 0
        // so j = arr.length - 1 which is, 6 - 1 on first run = 5
        // 5 is bigger or equal to 0
        // it's true so it will compare 
        // i = 1 on first run and j = 5 on first run will compare
        // argument1 =  2, arr5 = 3
        // they are not same so j will -1 and run from j again
        // j which is 3 - 1 = 2
        // now it is argument1 = 2 and arr4 = 2
        // 2 == 2
        arr.splice(j, 1)
        // we set arr.splice when i == j
        // what arr.splice(j, 1) does is 
        // at the current position which is 2 for now
        // take out 1 element which is 2
      }
    }
  }
  return arr
  //after all i and j is true return the arr again which will be [1,1]
  // in the end
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))

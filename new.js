let list1 = [1, 2, 3, 4, 5];
let list2 = [1, 2, 3, 4, 5, 6];

// [11,12,13,14,15]
//console.log(list[2])

function result(array) {
  // console.log('typeof Before:', typeof array);
  for (let i = 0; i <= array.length - 1; i++) {
    array[i] = array[i] + 10;
    // console.log(`typeof at iteration ${i} ${typeof array}`);
    // console.log(array);
  }
  return array;

}
console.log(result(list1));
// result(list2);

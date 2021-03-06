// My solution
function inArray(array1,array2){
  const a2 = array2.join(" ")
  let r = [];
  for (var i = 0; i < array1.length; i++) {
    let REGOX = new RegExp(array1[i])
    if (REGOX.test(a2) && array1[i] != undefined) {
      r.push(array1[i])
    } 
  }
  return  r.sort()
}

// Top solution 
function inArray(arr1, arr2) {
  return arr1.filter(function(needle) {
    return arr2.some(function(haystack) {
      return haystack.indexOf(needle) > -1;
    });
  }).sort();
}

// Cleaver solution
function inArray(array1,array2){
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}
// My solution
function foldArray(array, runs) {
    if (runs <= 0) {
        return array
    } else {
        runs--;
        function summationArray(newArray) {
            const len = newArray.length;
            const result = [];
            for (var i = 0; i < Math.floor(len / 2); i++) {
                result.push(newArray[i] + newArray[len - 1 - i])
            }
            if (len % 2 != 0) {
                result.push(newArray[Math.floor(len / 2)])
            }
            return result
        }
        return foldArray(summationArray(array),runs)
    }
};

// Top solution 
function foldArray(a, n) {
  const r = [], c = a.slice();
  while (c.length) r.push(c.pop() + (c.shift() || 0));
  return n - 1 ? foldArray(r, n - 1) : r;
}

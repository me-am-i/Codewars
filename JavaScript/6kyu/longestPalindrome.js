// My solution
longestPalindrome=function(s){
  var result = "";
  for (var i = 0; i < s.length; i++) {
    for (var j = s.length; j > 0; j--) {
      var res = s.slice(i, j)
       res === res.split('').reverse().join('') && result.length < res.length ? result = res : 0  
    } 
  }
  return result.length
}

// Top solution 
longestPalindrome=function(s){
  var longest = 0;
  var length = s.length;

  for(var i=0; i < length; i++){
    for(var j = i+1; j <= length; j++) {
      var str = s.slice(i,j);
      var l = str.length
      if(isPalindrome(str) && longest < l) {
        longest = l;
      }
    }
  }
  return longest;
}

// Clever solution
var longestPalindrome=function(s){
  if (!s) return 0;
  for (let c = s.length; c > 0; c--) {
    for (let i = 0; i <= s.length - c; i++) {
      var check = s.substr(i, c);
      if (check === check.split("").reverse().join("")) return c;
    }
  }
}
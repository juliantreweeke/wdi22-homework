// FixStart
//
// Create a function called fixStart. It should take a single argument,
//  a string, and return a version where all occurences of its first character
//  have been replaced with '*', except for the first character itself.
//  You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

var fixStart = function(s){

  var first = s.charAt(0);
  return first + s.replace(/b/gi,'*').substring(1);

}

console.log(fixStart('babble'));

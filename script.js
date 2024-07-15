function firstWord(s) {
  // your code here
	s = s.split(' ')
 let space = ' '
 if (s[0] === space && s.length > 1) {
   return s[1]
   //console.log(s[1])
 }
 else{
   return s[0]
   //console.log(s[0])
 }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

function reverseString(str) {
    var currentString = str;
    var newString = '';
   for (let i = str.length - 1; i >= 0; i--) {
     newString = newString + currentString[i];
    }
    
    return newString;
   }
   console.log(reverseString('hello'));
   console.log(reverseString("Kasur Rusak"))
   console.log(reverseString("SanberCode"))
   console.log(reverseString("Haji Ijah"))
   console.log(reverseString("racecar"))
   console.log(reverseString("I am Sanbers"))
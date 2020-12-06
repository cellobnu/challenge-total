
let box = {}

box.numberToString= function numberToString(x) {
    // x is number
    // return x as a string
    return `${x}`;
    
};

box.triple = function triple (x) {
  //return x multiplied by 3
  return ( 3 * x );
  
};

box.floatToInt= function floatToInt(x) {
  // x is a float
  // return x as a truncated int
  return parseInt(x);
  
};

box.isOdd = function isOdd (x) {
  // x is an integer. 
  // return true if the number is odd and false if it is even    
  return ( x & 1 ) ? true : false;
   
};


box.cubeSurfaceArea = function cubeSurfaceArea(x) {
    // x is the length of the cube's sides
    // return the surface area of the cube, round the result to 4 digits
  return parseFloat((6 * x * x).toFixed(4));
};

box.squareRoot = function squareRoot (x) {
    //return square root of x
    return Math.sqrt(x);
};

box.removeFirstThree= function removeFirstThree(x) {
    // x is an array
    // return an array removing the first 3 elements on x
  
  return x.splice(3);
};

box.stringToNumber = function stringToNumber(x) {
    // x is a string that contains a number
    // return x as a number
    return parseFloat(x);
    
};

box.oddElements = function oddElements (x) {
    // x is an array of at least 2 unique elements
    // return the elements that are on odd positions in the array    
    return x.filter((_, indice) => indice % 2 == 0);
    
};

box.flatten = function flatten (x) {
    // x is an arbitrarily nested, multidimensional array.
    // return x flattened (all items in 1 dimension)
    return x.reduce(function(memo, el) {
      var items = Array.isArray(el) ? flatten(el) : [el];
      return memo.concat(items);
    }, []);       
};

box.sphereVolume = function sphereVolume(x) {
    // x is radius of a sphere
    // return the volume of the sphere, round the result to 4 digits
    return parseFloat(((4 / 3) * Math.PI * Math.pow(x, 3)).toFixed(4));
};

box.getFileExtension= function getFileExtension(x) {
    // x is a string (representing a file name)
    // return the file extension (everything after the last dot)
    const ext = x.split('.').pop();
    if(ext == x) return "";
    return ext;

};

box.hasOnlyVowels= function hasOnlyVowels(x) {
    // x is a string. return true if every char in the string is an english vowel
    
    return x ? x.match(/[aeiouAEIOU]/g).length === x.length : true;
};

box.doubleIndex= function doubleIndex(x) {
    // x is an array of numbers. Return elements on the array, where the value is equal to their index doubled.
    // [3, 2, 4, 6, 7] returns [2, 4, 6] (having the indices 1, 2, 3)
    return x.reduce(function(memo, el, i) {
      return (el === i + i) ? memo.concat(el) : memo;
    }, []);
};

box.sortingType = function sortingType (x) {
    // x is an array of at least 2 unique members
    // return 0 if it's not sorted, 1 if it's ascending, -1 if it's descending
    const asc = new Array(...x);
    const ascending = asc.sort(function(a, b){return a-b});
    const desc = new Array(...x);
    const descending = desc.sort(function(a, b){return b-a});
    return (x.join() === ascending.join()) ? 1 : (x.join() === descending.join()) ? -1 : 0;

};

box.dateRank = function dateRank (x) {
    // x is a date in 2019 as string (example: "06/30/2019")
    // return the rank of the day in 2019 (i.e. "09/01/2019" translates to 244)

    // regardless DST, you still wish to see 3 days
    return parseInt(Math.abs( new Date('01/01/2019') - new Date(x)) / (1000*60*60*24) +1);
    
};

box.invertCase = function invertCase (x) {
    // x is a string. turn lowercase letters to uppercase and vice versa.
    return x.replace(/./g, c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase());
    
};

box.mostFrequentItem = function mostFrequentItem (x) {
    // x is an array of at least 1 item.
    // return the most frequent item (there will always be just one).
    let counts=[];
    let compare = '';
    let mostFrequent = '';
    x.map(( item, i) => {
      counts[item] = !counts[item] ? 1 : counts[item] + 1;
       if(counts[item] > compare){
             compare = counts[item];
             mostFrequent = x[i];
       }
    });
    return mostFrequent;
  
};

box.hasBalancePoint = function hasBalancePoint (x) {
    // x is an array of numbers. return whether there is an index where the sum
    // before (excluding) it is equal to the sum after (including) it.
    const sum = function(a,b){return a+b}
    for(var i = 1; i < x.length; i++){
        if (x.slice(0,i).reduce(sum) === x.slice(i).reduce(sum))
            return true;
    }
    return false || x.length < 2;
    
};

box.reverseString = function reverseString(x) {
    // x is a string. rearrange the string from the last to the first character
    
    return x.split("").reverse().join("");
};
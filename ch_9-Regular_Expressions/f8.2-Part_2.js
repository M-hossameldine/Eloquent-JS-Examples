/*
* Date Class
  - new Date()
  - new Date(2009, 11, 9, 12, 59, 59, 999)
  * Timestams, 1970
    - Unix time
    - Negative numbers -before 1970-
    - getTime()
    - Date.now() function
  * Date Object Methods:
    - getFullYear(), getMonth(), getDate(), getHours(), getMinutes()
    - get fullYear() Vs. getYear()
  * Ex. Ex. Create a date from a string (Extract/Group specific parts)
*/
/*********************************************************************/
// The Date Class
/*********************************************************************/
// ** The date constructor: new Date() -> Create a current date object
console.log(new Date()); // -> Wed Aug 04 2021 15:41:27 GMT+0200

// ** Create an object for a specific time
console.log(new Date(2009, 11, 9));
// -> Wed Dec 09 2009 00:00:00 GMT+0200

console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
// -> Wed Dec 09 2009 12:59:59 GMT+0200

console.log(new Date(2009, 11));

// ** Timestamps
/*
 * Timestamps: are stored as the number of milliseconds since the start of 1970, in the UTC time zone.
 * "Unix time" set a conversion, you can use negative numbers for time before 1970.
 * getTime() method on a date object returns a timestamp number.
 * Date.now() function: returns current time in milliseconds.
*/ 

console.log(new Date(2013, 11, 19).getTime()); // -> 1387404000000
console.log(new Date(1387404000000));          // -> Thu Dec 19 2013 ... 

console.log(new Date(1960, 0, 1).getTime());   // -> -315626400000
console.log(new Date (-315626400000));         // -> Fri Jan 1960 ... 

console.log(new Date().getTime());             // -> 1628101272984
console.log(Date.now());                       // -> 1628101272984 

// Date Object Methods
console.log(new Date().getFullYear()); // -> 2021
console.log(new Date().getYear());     // -> 121  (fullYear - 1900)  
console.log(new Date().getMonth());    // -> 7
console.log(new Date().getDate());     // -> 4  - Month day -
console.log(new Date().getHours());    // -> 21
console.log(new Date().getMinutes());  // -> 29

// Ex. Create a date from a string (Extract/Group specific parts)
// input (1-30-2003)
function strToDate(str) {
  let [ _ , month, day, year] = 
    /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(str);
  return new Date(year, month, day)
}

console.log(strToDate("1-30-2019")); // -> Sat Mar 2019 00:00:00 GMT+0200

/*********************************************************************/

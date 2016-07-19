const util = require ('./grades.js');
var grade = util.computegrade(75,30);
var failed = util.computefailed(<=75 && >=75);
var passed = util.computepassed(<=75 && >=75);
console.log("Emter grade:" +grade);
console.log("Enter grade:" +failed);
console.log("Enter a grade:" +passed);
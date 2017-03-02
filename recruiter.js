'use strict';

// Object containing starting wages for various 4 year degrees
var degreeSWage = require('degreeSWage.json');
// Object containing the interns we want to evaluate
var potentialHires = require('input/groupOne.json');
var interns = potentialHires.interns;

//TODO: Requre external set of utility functions
// getValueFromWageAndExp( wage, full years of experiance );
// bracketFromGPA(decimal GPA); -- Have Students write this function?






// Output 
// An array of HIREABLE 'intern objects' (in order of most valueable to least valueable)
// with at least the properties "name", "metric", "degree"
// You can come up with anything you want for "metric" as long as it corresponds to spec
// and people earlier in the array have equal or greater values for "metric" than
// people further down.

return arrayOfHireableInterns;
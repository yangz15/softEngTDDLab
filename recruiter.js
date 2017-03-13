'use strict';
var exports = module.exports = {};

// Object containing starting wages for various 4 year degrees
var degreeSWage = require('degreeSWage.json');

// getValueFromWageAndExp( wage, full years of experiance );
function getValueFromWageAndExp(wage, fullYearsExp) {
	if (fullYearsExp !== Math.floor(fullYearsExp)) {
		console.error("getValueFromWageAndExp was given a partial year of experiance")
		return false;
	}
	var modYears;
	if (fullYearsExp >= 5) {
		modYears = 5;
	} else {
		modYears = fullYearsExp;
	}
	modYears = 1 + (modYears - 1) * 0.2;
	return modYears * wage;
}

// sortInternObjects( Array of hireables with "metric" as a property )
function sortInternObjects(internArr) {
	internArr.sort(function (a, b) {
  	return b.metric - a.metric;
	});
}

//TODO: You need to write this function AND utilize it.
// bracketFromGPA(decimal GPA);
function bracketFromGPA(gpa) {
	// 4-3.5, 3.49 - 3.0, 2.99 - 2.5
	return; //some form of bracket number
}

// recruiter( Array of hireables )
exports.recruiter = function(internArr) {

	// Below is just to help show the syntax you need,
	// you'll need to process all of the hireables like this one and sort
	var index = 0;
	var iname = internArr[index].name;
	var idegr = internArr[index].degree;
	var igpa = internArr[index].gpa;
	var iexp = internArr[index].experiance;
	var iwage, ivalue, ibracket, imetric;

	// Yep, you can use strings as an "index" (technically it's a property) in JavaScript
	idegr = idegr.toLowerCase();
	iwage = degreeSWage[idegr];

	// You should use these functions at some point
	ivalue = getValueFromWageAndExp( /*wage, full years of experiance*/ );
	ibracket = bracketFromGPA ( /*decimal GPA*/ );

	// Hmm... this doesn't seem to follow the spec - fix it
	imetric = ivalue + ibracket;

	// We really want to add our sorting number "metric" to objects (really is this easy)
	internArr[index].metric = imetric;

	// and then sort them all
	sortInternObjects( /*Array of hireables with "metric" as a property*/ );


	// Output 
	// An array of HIREABLE 'intern objects' (in order of most valueable to least valueable)
	// with at least the properties "name", "metric", "degree"
	// You can come up with any number you want for "metric" as long as it corresponds to the spec
	// and people earlier in the array have equal or greater values for "metric" than
	// people further down.

	return arrayOfHireableInterns;
};
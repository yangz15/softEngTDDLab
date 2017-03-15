'use strict';

var test = require('tape');
// Object containing the interns we want to evaluate
var potentialHires = require('../input/groupOne.json');
var interns = potentialHires.interns;

var recruiter = require('recruiter.js');
var util = require('util.js');

test('util.getValueFromWageAndExp', function(t) {
  t.ok(util.getValueFromWageAndExp(31, 1) > util.getValueFromWageAndExp(30, 1), 'factors in wage');

  if (util.getValueFromWageAndExp(30, 1) > util.getValueFromWageAndExp(30, 0)) {
  	t.pass('factors in experiance');
  } else {
  	t.fail('does not factor in experiance');
  }

  t.throws(function() { util.getValueFromWageAndExp(34, 1.3); },
  	/was given a partial year/,
  	'errors on partial years');

  t.end();
});

test('util.sortInternObjects', function(t) {
	inputArr = [interns[0], interns[1], interns[2], interns[3]];
	inputArr[0].metric = 3;
	inputArr[1].metric = 1;
	inputArr[2].metric = 2;
	inputArr[3].metric = 0;

	expectedArr = [
		inputArr[0],
		inputArr[2],
		inputArr[1],
		inputArr[3]
	];

  t.deepEqual(util.sortInternObjects(inputArr), expectedArr, 'bascially sorts by metric');

  inputArr[0].metric = 0;

  expectedArr = [
		inputArr[2],
		inputArr[1],
		inputArr[0],
		inputArr[3]
	];

	t.deepEqual(util.sortInternObjects(inputArr), expectedArr, 'preserves order of same-metric objects');

  t.end();
});

test('@define-placeholder works with several added selectors', function(t) {
  compareFixtures(t, 'several-additions');
  t.end();
});

// Your tests go here  (methods reference: https://www.npmjs.com/package/tape#testname-opts-cb )
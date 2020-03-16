const Calculator = require('./calculator');
var seedrandom = require('seedrandom');

class Generator extends Calculator {

	randomNoSeed(min, max) {
		var number = Math.random() * (max - min + 1) + min;
		var intArray;
		var even = [0,2,4,6,8];
		intArray = [Math.floor(Math.random() * (max - min + 1) + min)];
		// This if statement makes the function be able to return both Integer and Decimal values.
		if (even.includes(intArray[0]) == true){
			return Math.floor(number);
		} else {
			return number;
		}
	}

	randomSeed(min, max, seed){
		var generator = seedrandom(seed);
		var random = generator() * (max - min) + min;
		return random;
	}

	randomNumberList(arraylen, min, max, seed) {
		var array = [];
		var temp;
		var intArray;
		var even = [0,2,4,6,8];

		for (var i = 0; i<arraylen; i++){
			temp = this.randomSeed(min, max, seed);
			intArray = [Math.floor(Math.random() * (max - min + 1) + min)];
			// This if statement makes the function be able to return both Integer and Decimal values.
			if (even.includes(intArray[0]) == true){
				array += Math.floor(temp);
				seed += 'next';
			} else {
				array += temp;
				seed += 'next';
			}

			seed += 'next';
		}
		
		return array;
	}

	chooseRandomItem(anArray) {
		
		return anArray[Math.floor(Math.random() * anArray.length)];

	}

	selectSameValue(anArray,seed) {
		var seedNum = Math.floor(this.randomSeed(0,anArray.length,seed));
		
		return anArray[seedNum];
	}

	selectFromListNoSeed(anArray, numberToSelect) {
		var array = [];

		for (var i = 0; i<numberToSelect; i++){
			array += this.chooseRandomItem(anArray);
		}

		return array;
	}

	selectFromListSeed(anArray, numberToSelect, seed) {
		var array = [];

		for (var i = 0; i<numberToSelect; i++){
			array += this.selectSameValue(anArray,seed);
			seed += '.';
		}

		return array;
	}
}
module.exports = Generator;

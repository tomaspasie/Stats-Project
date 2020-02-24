const Calculator = require('./Calculator');
class Statistics extends Calculator {

    Variance(a,b) {
        return this.Difference(a,b);
    }
    Mean(values) {
        let sum = this.Add(values);
        let numValues = values.length;
        return this.Divide(sum,numValues);
    }
	/*
	standardDev() {
		
	}
	Mode(probably an array of numbers){
		
	}
	Quartiles() {
		
	}
	Skewness() {
		
	}
	sampleCorrelation() {
		
	}
	populationCorrelation() {
		
	}
	zscore() {
		
	}
	meanDeviation() {
		
	}
	*/
}
module.exports = Statistics;
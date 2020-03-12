const calculator = require('./calculator');

class Statistics extends calculator{

    Mean(values) {
        let sum = this.sum(values);
		let numValues = values.length;
		let mean = this.quotient(sum,numValues)
        return mean;
	}
	Median(values) {
		let numValues = values.length;
		let position = ((numValues+1)/2)
		let median = values[position-1]
        return median;
	}

	Mode(values){

	}

	Variance(values) {
		let numerator = 0;
		let denominator = values.length;
		let mean = this.Mean(values)
		for (var i = 0; i < denominator; i++){
			numerator += this.power(this.difference(values[i],mean),2);
		}
		let variance = this.quotient(numerator,denominator);
        return variance;
    }
	
	standardDev(values) {
		let variance = this.Variance(values);
		let std = this.root(variance);
		return std;
	}

	/*
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
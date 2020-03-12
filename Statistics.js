const calculator = require('./calculator');

class Statistics extends calculator{

    Mean(values) {
        let sum = this.sum(values);
		let numValues = values.length;
		let mean = this.quotient(sum,numValues)
        return mean;
	}
	Median(values) {
		values.sort();
		let numValues = values.length;
		
		if (numValues%2==0){
			let position1 = this.quotient(numValues,2);
			let position2 = this.sum(this.quotient(numValues,2),1)
			let median = this.quotient(values[position1]+values[position2],2);
			return median;
		} else{
			let position = ((numValues+1)/2)
			let median = values[position-1]
			return median;
		}
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

	
	Quartiles(values) {
		let num = values.length;
		let Q1 = this.product(.25,num+1);
		let Q3 = this.product(.75,num+1);
		let Q2 = Q3 - Q1;
		let quartiles = 'Lower Quartile (Q1): ' + Q1 + ' | Middle Quartile (Q2): '+ Q2 + ' | Upper Quartile (Q3): '+ Q3;
		return quartiles
	}

	
	Skewness(values) {
		let mean = this.Mean(values);
		let std = this.standardDev(values);
		let skew = 0;
		var value;
		for (value in values){
			skew += this.power(this.quotient(values[value] - mean, std), 3);
		}
		let skewness = this.quotient(skew,values.length);
		return skewness;
	}
	
	/*
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
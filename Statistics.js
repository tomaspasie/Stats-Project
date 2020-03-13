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
	
	
	sampleCorrelation(x,y) {
		let length1 = x.length;
		let length2 = y.length;

		if(length1!=length2){
			return "[Error: Arrays do not have proper X and Y values.]"
		};

		let numerator = 0;
		let denominator = length1 - 1

		let mean1 = this.Mean(x);
		let mean2 = this.Mean(y);
		let std1 = this.standardDev(x);
		let std2 = this.standardDev(y);
		
		for (var i = 0; i < length1; i++){
			numerator += this.product(this.difference(x[i],mean1),this.difference(y[i],mean2));
		}

		let covariance = this.quotient(numerator,denominator);

		let sampleCorrelation = this.quotient(covariance,this.product(std1,std2));

		return sampleCorrelation;
	}

	populationCorrelation(x,y) {
		let length1 = x.length;
		let length2 = y.length;

		if(length1!=length2){
			return "[Error: Arrays do not have proper X and Y values.]"
		};

		let numerator = 0;
		let denominator = length1

		let mean1 = this.Mean(x);
		let mean2 = this.Mean(y);
		let std1 = this.standardDev(x);
		let std2 = this.standardDev(y);
		
		for (var i = 0; i < length1; i++){
			numerator += this.product(this.difference(x[i],mean1),this.difference(y[i],mean2));
		}

		let covariance = this.quotient(numerator,denominator);

		let populationCorrelation = this.quotient(covariance,this.product(std1,std2));

		return populationCorrelation;
	}

	zscore(values, value) {
		let std = this.standardDev(values);
		let mean = this.Mean(values);
		let zscore = this.quotient(this.difference(value,mean),std);

		return zscore;
	}

	meanDeviation(values) {
		let mean = this.Mean(values);
		let length = values.length;
		let absValue = 0;

		for (var i = 0; i < length; i++){
			absValue += Math.abs(this.difference(values[i],mean));
		}

		let meanDeviation = this.quotient(absValue,length);

		return meanDeviation;
	}

}
module.exports = Statistics;
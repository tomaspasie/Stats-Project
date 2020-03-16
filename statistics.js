const calculator = require('./calculator');

class Statistics extends calculator{

	// Statistics Functions

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
			let position2 = this.difference(this.quotient(numValues,2),1);
			let median = this.quotient(values[position1]+values[position2],2);
			return median;
		} else{
			let position = ((numValues+1)/2)
			let median = values[position-1]
			return median;
		}
	}

	Mode(values){
		values.sort();
		let length = values.length
		let highestNum = 0;
		let one = values.filter(val => val==values[0]).length;
		let two = values.filter(val => val==values[0-1]).length;
		let modes = [];

		for (var i = 1; i < length+1; i++){
			if (one<two){
				highestNum = two;
			}

			one = values.filter(val => val==values[i]).length;
			two = values.filter(val => val==values[i-1]).length;
		}

		for (var i = 1; i < length+1; i++){
			if (values.filter(val => val==values[i]).length == highestNum){
				if(modes.includes(values[i]) == false){
					modes += values[i];
				}
			}
		}
		

		return modes;
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

	zScore(values, value) {
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

	// Population Sampling Functions

	simpleRandomSampling(values,sampleSize) {
		let sample = [];
		let length = values.length;
		for (var i = 0; i < sampleSize; i++){
			let random = Math.round(Math.random()*length);
			if (random != 10){
				sample += values[random] + ",";
			} else{
				i-=1;
			}
		}
		return sample.toString().slice(0,-1);
	}
	
	systematicSampling(values,every){
		let sample = [];
		let everyNum;
		let length = values.length;
		for (var i = 1; i < length+1; i++){
			everyNum = every*i;
			if(everyNum>length){
				break;
			} else{
				sample += values[everyNum-1] + ",";
			}
		}

		return sample.toString().slice(0,-1);
	}

	confidenceInterval(sample) {
		let sampleArray = JSON.parse("[" + sample + "]");
		let length = sampleArray.length;
		let mean = this.Mean(sampleArray);
		let std = this.standardDev(sampleArray);
		let z = 1.96;
		let lower = ((mean) - z * ((std)/(this.root(length))));
		let upper = ((mean) + z * ((std)/(this.root(length))));
		let sampleConfidence = lower + " ± " + upper;
		
		return sampleConfidence;
	}

	
	marginOfError(sample,population) {
		let sampleArray = JSON.parse("[" + sample + "]");
		let cv =  1.96;
		let std = this.standardDev(population);
		let sLen = sampleArray.length;
		let margin = (cv * (std/this.root(sLen)));
		return margin+'%';
	}

	findConfidenceInterval(sample,population) {
		let sampleArray = JSON.parse("[" + sample + "]");
		let sampleLength = sampleArray.length;
		let populationLength = population.length;
		let mean = this.Mean(sampleArray);
		let std = this.standardDev(sampleArray);
		let z = 1.96;
		let lower = ((mean) - z * ((std)/(this.root(sampleLength))) * (this.root((populationLength-sampleLength)/(populationLength-1))));
		let upper = ((mean) + z * ((std)/(this.root(sampleLength))) * (this.root((populationLength-sampleLength)/(populationLength-1))));
		let populationConfidence = lower + " ± " + upper;
		
		return populationConfidence;
	}
	
	
	cochransFormula(values,sampleSizeRecommendation) {
		let populationSize = values.length;
		let cochrans = this.quotient(sampleSizeRecommendation,this.sum(1,this.quotient(this.difference(sampleSizeRecommendation,1),populationSize)));

		return cochrans;
	}
	
	
	unknownPopStDev(percentageAsDecimal) {
		let z = 1.96;
		let width = 0.06;
		let e = this.quotient(width,2);
		let p = percentageAsDecimal;
		let q = this.difference(1,p);
		let x = this.power(this.quotient(z,e),2);
		let sample = Math.ceil(this.product(this.product(p,q),x));

		return sample;
	}
	
	knownPopStDev(std) {
		let z = 1.96;
		let width = 0.5;
		let x = this.product(z,std);
		let sample = Math.ceil(this.power(this.quotient(x,width),2));

		return sample;
	}
	
}

module.exports = Statistics;
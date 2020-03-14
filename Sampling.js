const statistics = require('./statistics');

class Sampling extends statistics {
	
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
		let lower = ((mean) - z * ((std)/(Math.sqrt(length))));
		let upper = ((mean) + z * ((std)/(Math.sqrt(length))));
		let sampleConfidence = lower + " ± " + upper;
		
		return sampleConfidence;
	}

	
	marginOfError(sample,population) {
		let sampleArray = JSON.parse("[" + sample + "]");
		let cv =  1.96;
		let std = this.standardDev(population);
		let sLen = sampleArray.length;
		let margin = (cv * (std/Math.sqrt(sLen)));
		return margin+'%';
	}

	findConfidenceInterval(sample,population) {
		let sampleArray = JSON.parse("[" + sample + "]");
		let sampleLength = sampleArray.length;
		let populationLength = population.length;
		let mean = this.Mean(sampleArray);
		let std = this.standardDev(sampleArray);
		let z = 1.960;
		let lower = ((mean) - z * ((std)/(Math.sqrt(sampleLength))) * (Math.sqrt((populationLength-sampleLength)/(populationLength-1))));
		let upper = ((mean) + z * ((std)/(Math.sqrt(sampleLength))) * (Math.sqrt((populationLength-sampleLength)/(populationLength-1))));
		let populationConfidence = lower + " ± " + upper;
		
		return populationConfidence;
	}
	
	/*
	cochransFormula() {
		
	}
	unknownPopStDev() {
		
	}
	knownPopStDev() {
		
	}
	*/
}
module.exports = Sampling;
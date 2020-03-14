const statistics = require('./statistics');

class Sampling extends statistics {
	
	simpleRandomSampling(values,sampleSize) {
		let sample = [];
		let length = values.length;
		for (var i = 0; i < sampleSize; i++){
			let random = Math.round(Math.random()*length);
			if (random != 10){
				sample += values[random]+' ';
			} else{
				i-=1;
			}
		}
		
		return sample;
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
				sample += values[everyNum-1]+' ';
			}
		}

		return sample;
	}

	confidenceInterval(values) {
		let length = values.length;
		let mean = this.Mean(values);
		let std = this.standardDev(values);
		let z = 1.960
		let lower = ((mean) - z * ((std)/(Math.sqrt(length))));
		let upper = ((mean) + z * ((std)/(Math.sqrt(length))));
		let confidence = lower + " ± " + upper;
		
		return confidence;
	}

	/*
	marginOfError() {
		
	}
	findConfidenceInterval() {
		
	}
	cochransFormula() {
		
	}
	unknownPopStDev() {
		
	}
	knownPopStDev() {
		
	}
	*/
}
module.exports = Sampling;
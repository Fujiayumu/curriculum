let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven() {
	for(i=0;i<numbers.length;i++){
		let num = numbers[i];
		if(num%2===0){
    		console.log(num + 'は偶数です');
    	}else{
			;
		}
    }
}

isEven();

class car{
	constructor(gas,carNum){
		this.gas = gas;
		this.carNum = carNum;
	}
	
	getNumGas(){
		console.log(`ガソリンは${this.gas}です。ナンバーは${this.carNum}です`)
	}
}

let myCar = new car(100,149586)
myCar.getNumGas();
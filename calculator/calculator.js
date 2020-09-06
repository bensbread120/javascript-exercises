function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (array) {
	let arraySum = 0;
	for (let i = 0;i<array.length;i++) {
		arraySum+=array[i];
	}
	return arraySum;
}

function multiply (numN) {
	let answer = 1;
	for (let i = 0;i<numN.length;i++) {
		answer*=numN[i];
	} return answer;
}

function power(num1, num2) {
	return num1 ** num2
}

function factorial(num) {
	let answer = 1;
	while (num>0) {
		answer*=num;
		num--;
	} return answer;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
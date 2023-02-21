let num1: number = 10;
console.log("number 1: ", num1);

let num2: number = 7;
console.log("number 2: ", num2);

let sum: number = num1 + num2;
console.log("sum : ", sum);

let sub: number = num1 - num2;
console.log("subtraction : ", sub);

let mul: number = num1 * num2;
console.log("multiplication : ", mul);

let div: number = num1 / num2;
console.log("division : ", div);

let mod: number = num1 % num2;
console.log("modulo : ", mod);

let Calculation = (num1: number, num2: number) => {
	let sum: number = num1 + num2;
	console.log("sum : ", sum);

	let sub: number = num1 - num2;
	console.log("subtraction : ", sub);

	let mul: number = num1 * num2;
	console.log("multiplication : ", mul);

	let div: number = num1 / num2;
	console.log("division : ", div.toFixed(2));

	let mod: number = num1 % num2;
	console.log("modulo : ", mod);
};

console.log('-----------------------------------------')
Calculation(100,32);
console.log('-----------------------------------------')
Calculation(52014,532);

var calc = require('./lib/calc');

function usage(){
	console.info('USAGE: calc math-expression');
}

function safe(expression){

}

if (process.argv.length>2)
	var expr = process.argv.slice(2);
else {
	usage();
	process.exit();
	return;
}

// TODO: Use regex to safely eliminate unsafe tokens

expr = expr.join(' '); // Merge all expression tokens

var result = eval(expr);

console.info('Expression:',expr);
console.log(result);
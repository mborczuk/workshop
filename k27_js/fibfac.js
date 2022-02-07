// Team Mechanical Pencils :: Shriya Anand, Michael Borczuk
// SoftDev pd1
// K27 -- Basic functions in JavaScript
// 2022-02-04
// time spent: 0.6 hours

var fact = function(n){
	if (n <= 1){
		return 1;
	}
	return (fact(n-1)*n);
};

var fib = function(n) {
	if (n == 0){
		return 0;
	}
	if (n <= 2){
		return 1;
	}
	return (fib(n - 1) + fib(n - 2));
};



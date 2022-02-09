// Team Mechanical Pencils :: Shriya Anand, Michael Borczuk
// SoftDev pd1
// K28 -- Getting more comfortable with the dev console and the DOM
// 2022-02-08
// time spent: 0.7 hours

//send diagnostic output to console
//(Ctrl-Shift-J in Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;



//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x;
};


//instantiate an object; you can use o.func(x) to access functions for an object
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };

//addItem returns undefined and makes direct changes to the list on the webpage
var addItem = function(text) {
  var list = document.getElementById("thelist"); //accesses list by ID (created in the HTML code)
  var newitem = document.createElement("li"); //li = list item
  newitem.innerHTML = text;
  list.appendChild(newitem);
};



var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li'); //returns array of all the elements in the list
  listitems[n].remove();
};


var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red'); // this adds the color red to the element, but HTML only uses the last color in the string so color cannot be overwritten
  }
};

// uses mod to alternate colors between blue and red for uncolored elements
var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

//insert your implementations here for...
// FIB
// FAC
// GCD
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


var gcd = function(a, b){
	var max = 1;
	if (a>b){
		max = a;
  }
	else {
    max = b
  }
	var ans = 1;
	for (let i = 1; i <= max; i++){
		if (a%i == 0 && b%i == 0){
			ans = i;
		}
	}
	return ans;
};

// assign function call results to text in the HTML page
var factResult = document.getElementById("fact");
factResult.innerHTML = "10! = " + fact(10);
var fibResult = document.getElementById("fib");
fibResult.innerHTML = "The 3rd element of the fibonacci sequence is " + fib(3);
var gcdResult = document.getElementById("gcd");
gcdResult.innerHTML = "The greatest common factor of 40 and 24 is " + gcd(40, 24);
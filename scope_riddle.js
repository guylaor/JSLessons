console.clear();

var x1 = 5;

var calc = function() {
  var y1 = 6;
  return x1 + y1;
}

var calc2 = function() {
  return x1 + y1;
  //var y1 = 2;
}

var calc22 = function() {
  return x1 + this.y1;
}

var calc3 = function() {
  this.y1 = 9;
  this.x1 = 1;
  return x1 + y1;
}

function calc4() {
  this.y1 = 9;
  this.x1 = 3;
  return x1 + y1;
}


// what you expect calc() to print out, and what it id
console.log("calc" , calc());

// fix the bug with cacl2
console.log("calc2" ,calc2());


console.log("calc22" ,calc22());
console.log("calc", calc());

console.log("calc3", calc3());
console.log("calc", calc());

console.log("calc4", calc4());
console.log("calc", calc());

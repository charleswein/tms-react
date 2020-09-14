//es5
function IntBuilder(num) {
  this.num = num;
}
IntBuilder.random = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  this.num = Math.floor(Math.random() * (max - min + 1)) + min;
  return this;
};
IntBuilder.prototype.minus = function (...args) {
  var sumElemArr = [...args].reduce((result, elem) => {
    return (result += elem);
  }, 0);
  this.num = this.num - sumElemArr;
  return this;
};
IntBuilder.prototype.plus = function (...args) {
  var sumElemArr = [...args].reduce((result, elem) => {
    return (result += elem);
  }, 0);
  this.num = this.num + sumElemArr;
  return this;
};

function AddOneIntBuilder(name) {
  IntBuilder.call(this, name);
}
AddOneIntBuilder.prototype = Object.create(IntBuilder.prototype);
AddOneIntBuilder.prototype.constructor = IntBuilder;

AddOneIntBuilder.prototype.multiply = function (arg) {
  this.num = this.num * arg;
  return this;
};
AddOneIntBuilder.prototype.divide = function (arg) {
  this.num = this.num / arg;
  return this;
};
let intsBuilderTwo = new AddOneIntBuilder(10);
console.log(intsBuilderTwo.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4));

function AddTwoIntBuilder(name) {
  AddOneIntBuilder.call(this, name);
}
AddTwoIntBuilder.prototype = Object.create(AddOneIntBuilder.prototype);
AddTwoIntBuilder.prototype.constructor = AddOneIntBuilder;

AddTwoIntBuilder.prototype.mod = function (arg) {
  this.num = this.num % arg;
  return this;
};
AddTwoIntBuilder.prototype.get = function () {
  return this.num;
};

let intsBuilder = new AddTwoIntBuilder(10);

console.log(intsBuilder.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get());
console.log(new IntBuilder.random(1, 100));


//es6
class IntString {
  constructor(str) {
    this.str = str;
  }
  plus(...args) {
    var sumElemArr = [...args].reduce((result, elem) => {
      return (result += elem);
    }, "");
    this.str = this.str + sumElemArr;
    return this;
  }
  minus(arg) {
    var str = String(this.str);
    this.str = str.slice(0, -arg);
    return this;
  }
}
class IntStringAddOne extends IntString {
  constructor(str) {
    super(str);
    this.str = str;
  }
  multiply(int) {
    var str = String(this.str);
    this.str = str.repeat(int);
    return this;
  }
  divide(n) {
    const chars = Math.floor(this.str.length / n),
      str = this.str;
    this.str = str.slice(0, chars);
    return this;
  }
}
var intStringTwo = new IntStringAddOne("Hello");
console.log(
  intStringTwo.plus(" all", "!").minus(4).multiply(3).divide(4));

class IntStringAddTwo extends IntStringAddOne {
  constructor(str) {
    super(str);
    this.str = str;
  }
  remove(word) {
    var str = this.str;
    var n = str.search(word);
    while (str.search(word) > -1) {
      n = str.search(word);
      str = str.substring(0, n) + str.substring(n + word.length, str.length);
    }
    this.str = str;
    return this;
  }
  sub(from, n) {
    var sub = String(this.str);
    this.str = sub.substr(from, n);
    return this;
  }
  get() {
    return this.str;
  }
}

var intString = new IntStringAddTwo("Hello");
console.log(
  intString.plus(" all", "!").minus(4).multiply(3).divide(4).remove("l").sub(1, 1).get());
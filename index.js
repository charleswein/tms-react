//es5
class Builder {
  constructor(num, str) {
    this.num = num;
    this.str = str;
  }
}
function IntBuilder(num) {
  Builder.constructor.call(this);
  this.num = num;
}
IntBuilder.random = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

IntBuilder.prototype = Object.create(Builder.prototype);
IntBuilder.prototype.constructor = Builder.constructor;

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
IntBuilder.prototype.multiply = function (arg) {
  this.num = this.num * arg;
  return this;
};
IntBuilder.prototype.divide = function (arg) {
  this.num = this.num / arg;
  return this;
};

IntBuilder.prototype.mod = function (arg) {
  this.num = this.num % arg;
  return this;
};
IntBuilder.prototype.get = function () {
  return this.num;
};

let intsBuilder = new IntBuilder(10);

console.log(
  intsBuilder.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get()
);
console.log(IntBuilder.random(10, 100));

//es6
class IntString extends Builder {
  constructor(str) {
    super(str);
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

var intString = new IntString("Hello");
console.log(
  intString
    .plus(" all", "!")
    .minus(4)
    .multiply(3)
    .divide(4)
    .remove("l")
    .sub(1, 1)
    .get()
);

var builder = new Builder(10, "Hello");
console.log(builder);

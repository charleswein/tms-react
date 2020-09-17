//es5

class Builder {
  constructor(value) {
    this.value = value;
  }
}

Builder.reduce = function (args) {
  var sumElemArr = args.reduce((result, elem) => {
    return (result += elem);
  });
  return sumElemArr;
};

function IntBuilder(value) {
  Builder.constructor.call(this, this.value = value)();
}
IntBuilder.random = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

IntBuilder.prototype = Object.create(Builder.prototype);
IntBuilder.prototype.constructor = Builder.constructor;

IntBuilder.prototype.minus = function (...args) {
  this.value = this.value - Builder.reduce(args);
  return this;
};
IntBuilder.prototype.plus = function (...args) {
  this.value = this.value + Builder.reduce(args);
  return this;
};
IntBuilder.prototype.multiply = function (arg) {
  this.value = this.value * arg;
  return this;
};
IntBuilder.prototype.divide = function (arg) {
  this.value = this.value / arg;
  return this;
};

IntBuilder.prototype.mod = function (arg) {
  this.value = this.value % arg;
  return this;
};
IntBuilder.prototype.get = function () {
  return this.value;
};

let intsBuilder = new IntBuilder(10);

console.log(
  intsBuilder.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get(),
);
console.log(IntBuilder.random(10, 100));

//es6
class IntString extends Builder {
  constructor(value) {
    super(value);
  }
  plus(...args) {
    this.value = this.value + Builder.reduce(args);
    return this;
  }
  minus(arg) {
    this.value = this.value.slice(0, -arg);
    return this;
  }
  multiply(int) {
    this.value = this.value.repeat(int);
    return this;
  }
  divide(n) {
    const chars = Math.floor(this.value.length / n);
    this.value = this.value.slice(0, chars);
    return this;
  }
  remove(word) {
    var n = this.value.search(word);
    while (this.value.search(word) > -1) {
      n = this.value.search(word);
      this.value = this.value.substring(0, n) + this.value.substring(n + word.length, this.value.length);
    }
    return this;
  }
  sub(from, n) {
    this.value = this.value.substr(from, n);
    return this;
  }
  get() {
    return this.value;
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
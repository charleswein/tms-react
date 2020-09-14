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

console.log(intsBuilder.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get());
console.log(new IntBuilder.random(1, 100));

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
    var arrStr = [...this.str],
      checkOnIndexOf = this.str.indexOf(word),
      checkOnSubLenght = word.length;

    var newArr = arrStr.filter((elem, index, array) => {
      return array.indexOf(elem) !== checkOnIndexOf;
    });
    this.str = newArr.join('');
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
  intString.plus(" all", "!").minus(4).multiply(3).divide(4).remove("l").sub(1, 1).get());
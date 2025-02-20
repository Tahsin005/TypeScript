function abcd() {
  console.log('Hi');
}
function abcdef(_name, _age, cb) {
  cb('hello');
}
abcdef('tahsin', 23, function (arg) {
  console.log(arg);
});
// optional parameters
function suiii(name, age, gender) {
  if (gender === void 0) { gender = 'male or female r kichu hoile thabor dibo'; }
  console.log(name, age, gender);
}
suiii('tahsin', 23, 'male');
suiii('lagbatak', 18);
// rest parameters
function mnopqrs(name) {
  var arr = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    arr[_i - 1] = arguments[_i];
  }
  console.log(name, arr);
}
mnopqrs('tahsin', 1, 2, 3, 4, 5);
function combine(input1, input2) {
  return input1 + input2;
}
// Usage
var result1 = combine("Hello, ", "World!"); // "Hello, World!"
var result2 = combine(10, 20); // 30
// const result3 = combine("Hello, ", 10); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

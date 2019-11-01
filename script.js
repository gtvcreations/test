// Javascript
function hello() {
    console.log("hello js function");
}
// Anonymous Function
var hellox = function () {
    console.log("hellox anonymous function");
};
// Lambda Statement
var ls = function (x) { return console.log(x + 5); };
// Lambda Function
var lf = function (x, y, z) {
    return x + y + z;
};
hello();
hellox();
ls(2);
console.log(lf(1, 2, 3));
var Test = /** @class */ (function () {
    function Test() {
        this.primary = function (x, y, z) {
            return x + y + z;
        };
    }
    Test.statVar = "asdasd";
    return Test;
}());

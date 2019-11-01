// Javascript
function hello() {
    console.log("hello js function");
}

// Anonymous Function
var hellox = function() {
    console.log("hellox anonymous function");
}

// Lambda Statement
var ls = x => console.log(x+5);

// Lambda Function
var lf = (x,y,z) => {
    return x+y+z;
};

hello();
hellox();
ls(2);
console.log(lf(1,2,3));

class Test {
    constructor() {

    }

    static statVar = "asdasd";

    primary = (x,y,z) => {
        return x+y+z;
    };
}
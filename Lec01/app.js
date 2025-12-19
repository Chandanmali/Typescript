function add(num1, num2, res, statement) {
    if (res === true) {
        return "".concat(statement, " : ").concat(num1 + num2);
    }
    else {
        return 0;
    }
}
var num1 = 10;
var num2 = 100;
var result = true;
var statement = "The ans is ";
var ans = add(num1, num2, result, statement);
console.log(ans);

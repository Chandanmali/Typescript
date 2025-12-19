//Objects and array in ts
var person = {
    name: "chandan",
    age: 23
};
//person.name = 25  // this error give me in ts but run successfully in js
person.age = 30;
console.log(person);
console.log("understand array");
var arrayVal;
arrayVal = ["ram", "aam", "khata", "hai"];
console.log(arrayVal);
console.log("if want mix array elements then ");
var arrayVal2;
arrayVal2 = ["ram", 21, true, 22.5];
console.log(arrayVal2);

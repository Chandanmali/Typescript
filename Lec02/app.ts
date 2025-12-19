//Objects and array in ts
const person : {
    name: string;   
    age: number;
} = {
    name: "chandan",
    age: 23
}

//person.name = 25  // this error give me in ts but run successfully in js
person.age = 30

console.log(person)


console.log("understand array")

let arrayVal : string[];
arrayVal = ["ram", "aam", "khata", "hai"]
console.log(arrayVal)

console.log("if want mix array elements then ")

let arrayVal2 : any[];
arrayVal2 = ["ram", 21, true, 22.5]
console.log(arrayVal2)
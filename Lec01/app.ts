function add(num1 : number, num2 : number, res : boolean, statement : string){
    if(res === true)
    {
        return `${statement} : ${num1+num2}` 
    }
    else{
        return 0
    }
}

const num1 = 10;
const num2 = 100;
const result = true
const statement = "The ans is "


const ans = add(num1, num2, result, statement)
console.log(ans)
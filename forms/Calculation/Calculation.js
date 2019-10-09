
function calcAvgSquare(x, y, z) {
   return ((x + y + z)/3) * (x*x)
}


let x = Number(prompt("Enter your first number"))
let y = Number(prompt("Enter your second number"))
let z = Number(prompt("Enter your third number"))
let answer = calcAvgSquare(x, y, z)
alert(`Your number is ${answer}`)



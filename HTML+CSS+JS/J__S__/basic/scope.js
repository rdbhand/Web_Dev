//Types of Javascript
//1. Global Scope
var x=10
console.log("Outside fun : "+x)

function fun()
{
    console.log("Inside fun : "+x)
}
fun()

//2. Local / Function Scope

function f2()
{
    var y=10
    console.log("Inside fun : "+y)
}
f2()
// console.log("Outside fun : "+y) // will give error

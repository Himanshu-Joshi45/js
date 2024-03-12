function say(){
    console.log("himanshu")
}
say()
function addTwoNumber(num1, num2){
    console.log(num1+num2)
}
addTwoNumber(7,9)
 
function calculatePrice(...num1){
    return num1
}
console.log(calculatePrice(100,200,1200,899))
const user = {
    username : "Himanshu Joshi",
    price : 900,

}
function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
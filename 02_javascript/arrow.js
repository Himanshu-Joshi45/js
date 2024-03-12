const user = {
    username: "Himanshu Joshi",
    prince : 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this)
    }
     
}
user.welcomeMessage()
console.log(this)


//function one(){
//     console.log(this)
//}
//one()


const two = () => {
       let username = "himanshu"
    console.log(this)
}

(function three(){
    console.log(`hi`)
})();
function setUsername(username){
    //complex DB calls
    this.username=username
    console.log("called")
}

function createUser(username,email,password){
    setUsername.call(this,username)//calls a method of an object,substituting another object for the current object
    this.email=email
    this.password=password
}

const abc=new createUser("abc","abc@gmail.com",123)
console.log(abc)

class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`)
    }

    static createID(){
        return `123`
    }
}

const daksh=new User("Daksh")
// console.log(daksh.createID())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const hello=new Teacher("Hello","hello@example.com")
console.log(hello.createID())
class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`COURSE ADDED BY: ${this.username}`)
    }
}

const teacher1=new Teacher("Daksh","dak@teacher.com","password123")
teacher1.addCourse()

const teacher2=new User("Messmer")
//teacher2.addCourse()//      doesnt work because teacher2 is an instance of User class and addCourse() is a method of Teacher class
// teacher2.logMe()//  works

console.log(teacher1 instanceof Teacher)//true
console.log(teacher1 instanceof User)//true
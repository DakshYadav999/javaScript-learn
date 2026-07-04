//MODERN SYNTAX OF GETTER AND SETTER IN JAVASCRIPT
class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return `${this._password}daksh`
    }
    set password(value){
        this._password=value.toUpperCase()
    }
}

const daksh=new User("daksh@example.com", "abc123")
console.log(daksh.password)
console.log(daksh.email)
const User={
    _email:"daksh@example.com",
    _password:"abc123",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    } 
}

const tea=Object.create(User)
console.log(tea.email)
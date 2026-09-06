function User(email,password){
    this._email = email
    this._password = password
    // this is set normally when the new call happens 
    // the getter setter is for afterwards while access or update
}
 Object.defineProperty(User.prototype,'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
     Object.defineProperty(User.prototype,'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
    
const user = new User("@meow.com","lajdsfl;kahf;")
console.log(Object.getOwnPropertyDescriptor(User.prototype,"email"));
console.log(user.password);
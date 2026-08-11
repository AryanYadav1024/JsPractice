// primitive (stack) 
// non-primitive (heap) objects stored here but reference of non - primitives are stored in stack 
// same java ki trh to jada smjhne ki zrurat nhi

let myYtName = "aryan";
let anotherName = "aryan";

console.log(myYtName == anotherName);

anotherName = new String("aryan");

console.log(myYtName == anotherName);

anotherName = "chaiaurcode";

console.log(myYtName);
console.log(anotherName);

let user = ["ary",1,2,3];
console.log(user);

let user2 = user;
user2[1] = "jatt";
console.log(user); // see changed as array is non primitive copy of reference is passed.

let userObj = {
    email: "user@gmail.com",
    upi: "user@oksbi"
};


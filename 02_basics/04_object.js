//object singleton,object literal

// this both below work same give output {} that is empty object
const tinderUser1={}   // ye non singleton object hai
console.log(tinderUser1)

const tinderUser=new Object()  // ye singleton object hai
console.log(tinderUser)


//object ke andr object
const tinderUser3={}
const regularUser={
    fullname:{
        userfullname:{
            firstname:"kali",
            lastname:"baranwal"
        }
    }
}
console.log(regularUser)
console.log(regularUser.fullname.userfullname)

//object key value printing type
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3={obj1,obj2}
console.log(obj3)

const obj4=Object.assign({},obj1,obj2)
console.log(obj4)

const obj5={...obj1,...obj2}
console.log(obj5)

// Object.keys,Object.entries,Object.values


// object destructure
const course={
       name:"krit",
       coursename:"science"
}
//object.course
const{coursename}=course
console.log(coursename)

const navbar = ({company}) =>{

}
navbar(company="wipro")
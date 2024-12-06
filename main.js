
//string method
const x= "blaze"
console.log(x)

//number method
const pi =3.14285714;
const num= pi.toFixed(5)
console.log(num)

let mill =10000000;
let kkk= mill.toExponential()
console.log(kkk)


//boolean
var firstNumber=10;
var secondNumber=5;

let relation= firstNumber>secondNumber
console.log(relation)


//null & undefine
const nullPrimisive= null;
console.log(nullPrimisive)

const animal = "abosolute"
.match(/[aeb]/g)
console.log(animal)

//boolean
const boo ="7"
const bboo =10;
const boolean=boo-bboo
console.log(boolean)


var blz="blazer"
var blaze=blz.toLocaleUpperCase(5)
console.log(blaze)

// non porimisive datatype
//object

const person={
    firstnme: "quadri",
    lastname:"blaze",
    age: "17",
    occupation: "web dev",
    phoneNo: "08123435666",
    address: "24 obafemi close"
}

// document.write(` my name is ${person.firstnme} ${person.lastname},
//      i am ${person.age} years old,  i study ${person.occupation},
//       my contact is  ${person.phoneNo} , i leave at  ${person.address}
//        thank you so much for patronizing`)

let cool = {
    firstnme: "christ",
    lastname:"topher",
    age: "20",
    occupation: "app dev",
    phoneNo: "+23480987888",
    address: "13 enebong street"
}

console.log(`my name is ${cool.firstnme} ${cool.lastname}, i am ${cool.age} years old,  i study ${cool.occupation}, my contact is  ${cool.phoneNo} , i leave at  ${cool.address} thank you so much for patronizing`)

//array
// let fruits = ["orange", "apple", "starfruit", "almond", "watermelon"]
// fruits.push("date")
// fruits.pop()
// fruits.unshift("cucumber")
// fruits.shift()
// document.write(fruits)


//array of objejct
let people= [
    {
        firstnme:"hammed",
        lastname:"faruk",
        age:"20",
        address: "12 idow street"
    },

    {
        firstnme:"idowu",
        lastname:"farid",
        age:"22",
        address: "14 olanikan street"
    }
    ,
    {
        firstnme:"tope",
        lastname:"ibikunle",
        age:"16",
        address: "02 kajola  street"
    },
    
    {
        firstnme:"fatahi",
        lastname:"bantale",
        age:"56",
        address: "45 imole street"
    },

    {
        firstnme:"joshua",
        lastname:"imhie",
        age:"40",
        address: "19 oduwale street"
    },

    {
        firstnme:"kunle",
        lastname:"adeoti",
        age:"30",
        address: "09 odundayo street"
    }
]

people.map(yoo=>{
    console.log(` my name is ${yoo.firstnme} ${yoo.lastname} 
        i am ${yoo.age} years old, and live at ${yoo.address} thank you for patronizing, `)
})

//function
functionadditio

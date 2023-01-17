 // pass by reference
//  let a = {
//     name: "hamza"
//  }
//  let b = a
//  b.id=619
//  console.log(a)
 



//===== dosre obj ki prop copy krta hai/ =================spread operators=========


//  let config = {
//     inst: "SAIMS",
//     course: "web and mobile",
//     batch : 6,
//     year: 2023,
//  }
//  let std1={
//     ...config,
//     name :"Hamza",
//     age:20,
//     sec: "A",
//  }

//  console.log(std1)

// same case as above in array
//let a = ['a','b','c']
//let c = [1,2,3,...a] // jis position pr spread operator hai usi pr show hoga woh
//console.log(c)



// To avoid repitition of properties thru reference ( by object)
// let a = {
//     name:'ABC'
// }
// let b = {...a}

//  b.id = 123
// console.log(a,b)

//(by array)
// let a = ['a', 'b','c']
// let b = [...a]
// b.push(123)
// console.log(a,b)



//  let obj =[{
//    name : 'ABC',
//     id:1,
//      details:{
//         city:'karachi',
//         country:'pakistan'
//     }
// }]

// let obj2 = {...obj}
// delete obj2.details
// console.log(obj,obj2)
//nested mhi jaraha to remove it

// let b = JSON.parse(JSON.stringify([...obj]))
// console.log(b)



//========== rest operators
// in function // runs as array
// function abc(...a){
//     console.log(a)
// }
// abc(1,2,3,4) to get unlimited arguments



//==================================== destructure=============


//object se properties nikalna
// let obj={
//     id:1,
//     name:'ABC',
//     userName: 'ac123',
// }


// let{name,id}=obj
// console.log(name)
// console.log(id)


// destructuring in arrays


// let arr = ['abc','mno','pqr','jkl','xyz']

// let [a,b,,d]=arr
// console.log(d)



let arr = [
    2,
    2,
    3,
    "abc",
    "ty",
    [
      true,
      { id: 374, details: [{ id: 1, name: "Abu Bakar", dt: [1, 2, 3, 4, 5] }] },
    ],
  ];


//   let[]=arr[5][2].details
let {name,dt}=arr[5][1].details[0]
console.log(name,dt)


// let [a,b,c,d,e]=arr[5][1].details[0].dt
// console.log(b)

let[a,b,c,d,e]=dt
console.log(a,b,c,d,e)
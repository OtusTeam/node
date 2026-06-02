const myModule = ((a, b) => {
  console.log(a, b)

  return { a, b }
})('a', 'b')

const myModule1 = myModuleFunc('a', 'b')

function myModuleFunc(a, b) {
  return {
    a,
    b
  }
}

// CommonJS
// ES Modules

// От CommonJS -> ES Modules

// ES Modules only

// console.log(myModule);

// const dbModule = {
//   read() {
//     //...
//   },

//   write() {
//     //...
//   }
// }

// const userModule = {
//   getUser() {

//   },

//   setUserData() {

//   } 
// }

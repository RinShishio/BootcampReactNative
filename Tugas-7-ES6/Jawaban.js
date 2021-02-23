console.log("NO 1");
const golden = () => console.log("This is Golden")
golden();

console.log("\n"+"NO 2");
const newFunction = (firstName, lastName)=>{
    return{
      firstName,
      lastName,
      fullName(){
        console.log(firstName + " " + lastName)
        return 
      }
    }
  }
  newFunction("William", "Imoh").fullName()
  console.log("\n"+"NO 3");
  const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }
  
  const {firstName, lastName, destination, occupation, spell} = newObject
  console.log(firstName, lastName, destination, occupation)

console.log("\n"+"NO 4");
const west = ["Will", "Chris", "Sam", "Holly"]

const east = ["Gill", "Brian", "Noel", "Maggie"]

const combined = [...west,...east]

console.log(combined)

console.log("\n"+"NO 5");
const planet = "earth"
const view = "glass"
let before = `Lorem ${view} dolor sit amet,
consectetur adipiscing elit, ${planet} do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam`

console.log(before)
class Animal {
    constructor(name) {
      this.name = name;
      this.legs = 4;
      this.cold_blooded = false;
    }
   
  }
 
  var sheep = new Animal("shaun");
 
  console.log(sheep.name) // "shaun"
  console.log(sheep.legs) // 4
  console.log(sheep.cold_blooded) // false
  
  class Ape extends Animal {
    constructor(name) {
      super(name);
      this.legs=2;
    }
    yell(){
        console.log("auouo");
    }
  }
  class Frog extends Animal{
      constructor(name){
        super(name);
      }
    jump(){
        console.log("hop hop");
    }
  }
  var sungokong = new Ape("kera sakti")
  console.log(sungokong.name);
  console.log(sungokong.legs);
  sungokong.yell() // "Auooo"
  var kodok = new Frog("buduk")
  kodok.jump() // "hop hop" 
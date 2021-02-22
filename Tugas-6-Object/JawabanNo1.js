function arrayofObject(input) {
var input =  [["Abduh", "Muhamad", "male", 1992], ["Ahmad", "Taufik", "male", 1985],["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ];
var now = new Date()
var thisYear = now.getFullYear()
for (var i = 0; i < input.length; i++) {
    var personObj = {
        firstName : input[i][0],
        lastName: input[i][1],
        gender: input[i][2],
        age: thisYear-input[i][3]
    }
    if (input[i][3]> 2020 ||input[i][3]== null ) {
        personObj.age = "Invalid Birth Year"
    }
    var consoleText = (i+1)+". "+personObj.firstName+" "+personObj.lastName+":"
    console.log(consoleText);
    console.log(personObj);
}
}
arrayofObject()

 
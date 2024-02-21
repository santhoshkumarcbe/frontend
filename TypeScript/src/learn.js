var myVar = 100;
var myVarWithAnnotation = 10;
var a = 23;
var b = 54;
function add(a, b) {
    console.log("function add :" + a + b);
    return a + b;
}
var Students = /** @class */ (function () {
    function Students(name, age) {
        this.name = name;
        this.age = age;
    }
    return Students;
}());
var s = new Students("sasi", 14);
console.log("Student name : " + s.name);
var numbers = [1, 2, 3, 4, 5];
console.log("number : ", numbers);
numbers.push(6);
console.log("numbers after push : ", numbers);
var fruits = ["banana", "pineapple", "orange", "apple", "grapes"];
var mixedArray = [2, "one", 3, "two", 4, "seven", "eight"];
console.log("mixedArray :", mixedArray);
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Matrix : ", matrix);
// always use readonly for tuples
var ourTuple = [95, "sasi", true];
// ourTuple.push(false);
console.log("ourTuple : ", ourTuple);
var car = {
    type: "bmw",
};
car.model = 2024;
console.log("car ", car);
var building = {};
building.type = "hotel",
    building.build_on = 2024,
    building.isInagurated = true;
console.log("building type: " + building.type + ", building build on: " + building.build_on + ", is building inagurated: " + building.isInagurated);
var csecond = 24;
var cminute = 17;
var chour = 12;
var cmeridian = "PM";
var cdate = 23;
var cmonth = 1;
var cyear = 2024;
var c = {
    second: csecond,
    minute: cminute,
    hour: chour,
    meridian: cmeridian,
    date: cdate,
    month: cmonth,
    year: cyear,
};
c.date = 5;
console.log("clock : " + c.date);

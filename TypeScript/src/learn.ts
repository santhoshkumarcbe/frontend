let myVar = 100;
let myVarWithAnnotation: number = 10;

const a: number = 23;
const b: number = 54;

function add(a: number, b: number) {
    console.log("function add :" + a + b);
    return a + b;
}

interface Student {
    name: string;
    age: number;
}

class Students implements Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }


}

const s: Students = new Students("sasi", 14);
console.log("Student name : " + s.name);


const numbers: number[] = [1, 2, 3, 4, 5];

console.log("number : ", numbers);

numbers.push(6);

console.log("numbers after push : ", numbers);



const fruits: readonly string[] = ["banana", "pineapple", "orange", "apple", "grapes"];

const mixedArray: (number | string)[] = [2, "one", 3, "two", 4, "seven", "eight"]

console.log("mixedArray :", mixedArray);

const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]


console.log("Matrix : ", matrix);
// always use readonly for tuples
const ourTuple: readonly [number, string, boolean] = [95, "sasi", true]

// ourTuple.push(false);
console.log("ourTuple : ", ourTuple);

const car: { type: string, model?: number } = {
    type: "bmw",

}
car.model = 2024;

console.log("car ", car);

const building: { [index: string]: string | number | boolean } = {};
building.type = "hotel",
    building.build_on = 2024,
    building.isInagurated = true;

console.log("building type: " + building.type + ", building build on: " + building.build_on + ", is building inagurated: " + building.isInagurated);


type seconds = number;
type minutes = number;
type hour = number;
type meridian = string;
type date = number;
type month = number;
type year = number;

const csecond: seconds = 24
const cminute: minutes = 17
const chour: hour = 12
const cmeridian: meridian = "PM"
const cdate: date = 23
const cmonth: month = 1
const cyear: year = 2024

type clock = {
    second: seconds
    minute: minutes
    hour: hour
    meridian: meridian
    date: date
    month: month
    year: year
}

const c: clock = {
    second: csecond,
    minute: cminute,
    hour: chour,
    meridian: cmeridian,
    date: cdate,
    month: cmonth,
    year: cyear,

}

c.date = 5

console.log("clock : " + c.date);

